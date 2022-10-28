// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IERC677 {
    function transfer(address, uint) external returns (bool);

    function transferFrom(
        address,
        address,
        uint
    ) external returns (bool);
}

contract CrowdFundERC677 {
    event Launch(
        uint id,
        address indexed creator,
        uint goal,
        string title,
        string description,
        uint32 startAt,
        uint32 endAt,
        string category
    );
    event Cancel(uint id);
    event Pledge(uint indexed id, address indexed caller, uint amount);
    event Unpledge(uint indexed id, address indexed caller, uint amount);
    event Claim(uint id);
    event Refund(uint id, address indexed caller, uint amount);

    struct Campaign {
        // Campaign id
        uint id;
        // Creator of campaign
        address creator;
        // Amount of tokens to raise
        uint goal;
        // Category goal
        string category;
        // Title for goal
        string title;
        // Desc in goal
        string description;
        // Total amount pledged
        uint pledged;
        // Timestamp of start of campaign
        uint32 startAt;
        // Timestamp of end of campaign
        uint32 endAt;
        // True if goal was reached and creator has claimed the tokens.
        bool claimed;
    }

    IERC677 public immutable token;
    // Total count of campaigns created.
    // It is also used to generate id for new campaigns.
    uint public count;
    // Mapping from id to Campaign
    mapping(uint => Campaign) public campaigns;
    // Mapping from creator addres to Campaign
    mapping(address => Campaign[]) public campaignsAddress;
    // Mapping from campaign id => pledger => amount pledged
    mapping(uint => mapping(address => uint)) public pledgedAmount;
    // Mapping for campaings contributors
    mapping(uint => address[]) public contributedCampaign;

    constructor(address _token) {
        token = IERC677(_token);
    }

    function launch(
        uint _goal,
        uint32 _startAt,
        uint32 _endAt,
        string memory _title,
        string memory _description,
        string memory _category
    ) external {
        require(_startAt >= block.timestamp, "start at < now");
        require(_endAt >= _startAt, "end at < start at");
        require(_endAt <= block.timestamp + 90 days, "end at > max duration");

        count += 1;
        campaigns[count] = Campaign({
            id: count,
            creator: msg.sender,
            goal: _goal,
            title: _title,
            description: _description,
            pledged: 0,
            startAt: _startAt,
            endAt: _endAt,
            claimed: false,
            category: _category
        });

        campaignsAddress[msg.sender].push(Campaign({
            id: count,
            creator: msg.sender,
            goal: _goal,
            title: _title,
            description: _description,
            pledged: 0,
            startAt: _startAt,
            endAt: _endAt,
            claimed: false,
            category: _category
        }));
        
        contributedCampaign[count].push(msg.sender);

        emit Launch(count, msg.sender, _goal, _title, _description, _startAt, _endAt, _category);
    }

    function creatorCamps(address _add) public view returns (uint) {
        return campaignsAddress[_add].length;
    }

    function totalContributors(uint _camp) public view returns (uint) {
        return contributedCampaign[_camp].length;
    }

    function cancel(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(campaign.creator == msg.sender, "not creator");
        require(block.timestamp < campaign.startAt, "started");

        delete campaigns[_id];
        emit Cancel(_id);
    }

    function pledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp >= campaign.startAt, "not started");
        require(block.timestamp <= campaign.endAt, "ended");

        campaign.pledged += _amount;
        pledgedAmount[_id][msg.sender] += _amount;
        contributedCampaign[_id].push(msg.sender);
        token.transferFrom(msg.sender, address(this), _amount);

        emit Pledge(_id, msg.sender, _amount);
    }

    function unpledge(uint _id, uint _amount) external {
        Campaign storage campaign = campaigns[_id];
        require(block.timestamp <= campaign.endAt, "ended");

        campaign.pledged -= _amount;
        pledgedAmount[_id][msg.sender] -= _amount;
        token.transfer(msg.sender, _amount);

        emit Unpledge(_id, msg.sender, _amount);
    }

    function claim(uint _id) external {
        Campaign storage campaign = campaigns[_id];
        require(campaign.creator == msg.sender, "not creator");
        require(block.timestamp > campaign.endAt, "not ended");
        require(campaign.pledged >= campaign.goal, "pledged < goal");
        require(!campaign.claimed, "claimed");

        campaign.claimed = true;
        token.transfer(campaign.creator, campaign.pledged);

        emit Claim(_id);
    }

    function refund(uint _id) external {
        Campaign memory campaign = campaigns[_id];
        require(block.timestamp > campaign.endAt, "not ended");
        require(campaign.pledged < campaign.goal, "pledged >= goal");

        uint bal = pledgedAmount[_id][msg.sender];
        pledgedAmount[_id][msg.sender] = 0;
        token.transfer(msg.sender, bal);

        emit Refund(_id, msg.sender, bal);
    }
}
