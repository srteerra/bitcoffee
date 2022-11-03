![Logotipo 500x500 px (1)](https://user-images.githubusercontent.com/74383100/192911380-fee6c85a-d1a8-44e0-936e-69243b1357f2.gif)
# Bitcoffee
*Never stop doing what you love.*

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![](https://img.shields.io/github/stars/srteerra/bitcoffee)![](https://img.shields.io/github/forks/srteerra/bitcoffee)

#### *AVISO: TODAS LAS ADDRESS PRESENTADAS EN EL DISEÑO Y PROTOTIPO FUNCIONAL SON DE EJEMPLO, NO SE UTILIZA NINGUNA DE ESAS ADDRESS O WALLETS*

Bitcoffee is a CrowdFunding Dapp on the RSK network, in which anyone can raise funds for their personal interests, campaigns, charity funds, etc as well as for their followers can follow their goals, this through the use of crypto assets such as RBTC, Stablecoins from RSK or our own token BITC (Bitcoffee Token).

### This platform is now working at [bitcoffee.site](https://www.bitcoffee.site/#/home) and every smart contracs is fully functional.

# Table of contents
- [Pitch](#Pitch)
- [Smart contract interactions](#smart-contract-interactions)
- [Features](#features)
- [Built with](#built-with)
- [Workflow](#WorkFlow)
- [Roadmap](#roadmap)
- [Our Contracts](#our-contracts)
  - [Bitcoffee Token](#bitcoffee-token-contract)
  - [Crowdfunding Contract](#bitcoffee-crowdfunding-contract)
- [Screenshots](#screenshots)
- [Authors](#authors)
- [See our Demo](#demo-on-figma)
- [Quick start](#quick-start)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Development environment](#for-development-environment)
- [Project Structure](#project-structure)

# Pitch
[![Alt text](https://img.youtube.com/vi/Acfm1Ey-9Lw/0.jpg)](https://www.youtube.com/watch?v=Acfm1Ey-9Lw)

## Smart contract interactions
### How to claim a goal:

[![Alt text](https://img.youtube.com/vi/1jmZGAyPCv8/0.jpg)](https://www.youtube.com/watch?v=1jmZGAyPCv8&t=2s)

Meet your goals through the realization of the claim of the contributions you make in your goals.

### How to create a wallet:

[![Alt text](https://img.youtube.com/vi/EmsgVGoXhnA/0.jpg)](https://www.youtube.com/watch?v=EmsgVGoXhnA)

Start interacting with our platform through a wallet which we will teach you how to create step by step.

### How to contribute:

[![Alt text](https://img.youtube.com/vi/C9TWsQghfGA/0.jpg)](https://www.youtube.com/watch?v=C9TWsQghfGA)

Start supporting a creator you follow by contributing to their goals which you can fund on our platform.

### How to refund a goal:

[![Alt text](https://img.youtube.com/vi/TNOJcKMxO7o/0.jpg)](https://www.youtube.com/watch?v=TNOJcKMxO7o)

Learn how to refund your contributions made to goals that were not met.

### How to send a donation:

[![Alt text](https://img.youtube.com/vi/ZxstS_FsyJU/0.jpg)](https://www.youtube.com/watch?v=ZxstS_FsyJU)

Learn how to directly support your favorite creator through the direct contribution feature.

### How to launch a goal:

[![Alt text](https://img.youtube.com/vi/Kg1h0uZX6G8/0.jpg)](https://www.youtube.com/watch?v=Kg1h0uZX6G8)

Launch your first goal to achieve your monetary goals through our platform which provides you with the tools to achieve it.



# Features
- 👁‍🗨 Pure design and dynamic views.
- 🦊 Connection with Metamask.
- 📱 Simple UI and a beautiful UX Design.
- 📡 RSK Testnet Network.
- 💳 Platform with own token (BITC).
- 🌐 Under the distributed IPFS network.
- ⛏ ERC-20 Tokens transactions on RSK Blockchain.

 
 # Built with
- [VueJs](https://vuejs.org/) - Vuejs is a JavaScript framework for building user interfaces.
- [Web3.js](https://web3js.readthedocs.io/en/v1.8.0/) - Web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
- [BootstrapVue](https://bootstrap-vue.org/) - Extensive list of components and  Bundled Javascript plugins.
- [Sanity.io](https://www.sanity.io/) - Sanity is the platform for structured content that powers remarkable digital experiences.
- [Webpack](https://webpack.js.org/) - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
-  [Node.js](https://nodejs.org/es/) -As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

In addition, we plan to create a subscription for users who want to contribute monthly to the creators.
This is possible with the [SDK](https://developers.rsk.co/rif/scheduler/sdk/) of RIF to schedule transactions in RSK and offer plans for creators to upload exclusive content as a way to thank their followers for their support.

# WorkFlow
![WhatsApp Image 2022-10-02 at 15 58 23](https://user-images.githubusercontent.com/74383100/193482294-39d40b0c-1e46-4adc-b1b9-e6166683f18b.jpg)

# Roadmap
## 🚩 Phase 1
- Wireframes and UI.
- Branding.
- Initial structure.
- Fleek deploy.

## 🚀 Phase 2
- ERC-20 Token.
- Smart Contract deployed on RSK Testnet.
- Unit testing.
- Dapp v1 Launch.

## 🏁 Phase 3
- Smart contract for Crowdfunding.
- Rebranding essentials.
- rLogin implementation (Still in progress).
- Dapp v2 Launch.

## 🛠 Incomming Features
- Leadboard for Direct Transactions: This component will list the top donators every month on each profile.

# Our Contracts
#### [Bitcoffee Token Contract](https://explorer.testnet.rsk.co/address/0x2f395a03820af458ae3e39fca40c9dc80223492d)
```solidity
  // SPDX-License-Identifier: MIT
  pragma solidity ^0.6.12;

  contract Bitcoffee {
      // Variables
      string public name;
      string public symbol;
      uint8 public decimals;
      uint256 public totalSupply;
      mapping(address => uint256) public balanceOf;
      mapping(address => mapping(address => uint256)) public allowance;

      event Transfer(address indexed _from, address indexed _to, uint256 _value);
      event Approval(address indexed _owner, address indexed _spender, uint256 _value);

      // constructor
      constructor(string memory _name, string memory _symbol, uint8 _decimals, uint256 _totalSupply) public {
          name = _name;
          symbol = _symbol;
          decimals = _decimals;
          totalSupply = _totalSupply;
          balanceOf[msg.sender] = _totalSupply;
          emit Transfer(address(0), msg.sender, _totalSupply);
      }

      // Metodos
      function transfer(address _to, uint256 _value) public returns (bool success){
          require(balanceOf[msg.sender] >= _value, "Not enough funds");
          balanceOf[msg.sender] -= _value;
          balanceOf[_to] += _value;
          emit Transfer(msg.sender, _to, _value);
          return true;
      }

      function approve(address _spender, uint256 _value) public returns (bool success){
          allowance[msg.sender][_spender] = _value;
          emit Approval(msg.sender, _spender, _value);
          return true;
      }

      function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
         require(allowance[_from][msg.sender] >= _value);
         require(balanceOf[_from] >= _value);

         balanceOf[_from] -= _value;
         allowance[_from][msg.sender] -= _value;
         balanceOf[_to] += _value;

         emit Transfer(_from, _to, _value);
         return true;
      }
  }
```
#### [Bitcoffee Crowdfunding Contract](https://explorer.testnet.rsk.co/address/0x25ef68cfa7c1066c4b8d106e58f0de3baf2c5432)
```solidity
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
```
This Smart Contract is tested with Truffle and is completely functional in the platform.

#### This contract can do:
- Create a campaign
- Cancel a campaign
- Pledge rRIF tokens
- Unpledge tokens
- Claim tokens from campaign
- Refund tokens from campaign
<br />

# Screenshots
### Home View:
![Slide 16_9 - 1](https://user-images.githubusercontent.com/74383100/192910250-2ffe2b4c-9f20-42db-9754-75288642c0a6.png)
### About View:
![Slide 16_9 - 10](https://user-images.githubusercontent.com/74383100/192911037-99ecd64d-1f47-487a-b5d8-0551516d0e3c.png)
### Our Token View:
![Slide 16_9 - 9](https://user-images.githubusercontent.com/74383100/192911090-927e92ff-3d8b-453b-be1e-4775e61ab2d9.png)
### Public Profile View:
![Slide 16_9 - 2](https://user-images.githubusercontent.com/74383100/192911120-e5eeef0e-8a5c-4607-b59e-ee9eee16f7ba.png)
### Explore View:
![Web capture_1-11-2022_14028_www bitcoffee site](https://user-images.githubusercontent.com/74383100/199596780-6910f69a-fd81-43db-a682-f74282e49eea.jpeg)


# Authors

- [@srteerra](https://www.github.com/srteerra) - Angel Lopez
- [@Guapura89](https://www.github.com/Guapura89) - Carlos Sanchez
- [@jonocrod12](https://github.com/jonocrod12) - Jonathan Ocampo

# Demo on Figma
[Bitcoffee Board](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5GghfAuXAy1BLI8FNXynOD%2FBitcoffee%3Fnode-id%3D0%253A1 "@embed")


# Quick start
Here is what you need to run Bitcoffee locally:
#### Requirements: 
 - A Web Browser such [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Google Chrome](https://www.google.com/intl/en/chrome/).
 - [Metamask](https://metamask.io/) extension.
 - [Node.js](https://nodejs.org/es/) ^ 16.0.0 

## Installation:
### 1. First you need to create a folder, where you will save the project. (Optional)
```bash
mkdir bitcoffee
```
### 2. Move on terminal to the new folder.
```bash
cd bitcoffee/
```
### 3. Clone the repository
```bash
git clone https://github.com/srteerra/bitcoffee.git
```
### 4. Install dependences with:
```bash
npm install
```

#### And there you have, Bitcoffee locally!!
### For development environment
Execute the following command:
```bash
npm run server
```
It may take a few minutes to set up the application, so stay calm!
#### The default port is **8080**
```bash
http:/localhost:8080/
```

# Project Structure

    $ BitCoffee Tree
    bitcoffee/
    ├── build:
    │    ├── contracts/:                         # Folder for Smart Contracts JSON.
    ├── contracts/:  
    |    ├── Bitcoffee.sol:                     # Bitcoffee Smart Contract ERC-20 token.
    │    ├── CrowdFund.sol:                     # CrowdFunding Smart Contract for Bitcoffee token.
    │    ├── CrowdFundERC677.sol:               # CrowdFunding Smart Contract for tRif.
    │    └── Migrations.sol:                    # Migrations contract.
    ├── src/:                                   # Folder for development content.
    │    ├──app/:                               # Folder for Front-end.
    │    │    ├──assets/:                       # Folder for project assets.
    │    │    │   ├──icons/                  
    │    │    │   ├──images/                 
    │    │    │   ├──logos/               
    │    │    │   ├──vectors/                
    │    │    │   ├──breakpoints.scss:          # File for Media Queries.
    │    │    │   ├──globals.scss:              # File for global styles.
    │    │    │   ├──style.scss:                # File for main styles.
    │    │    │   └──variables.scss;            # File for style variables.
    │    │    ├──components/:                   # Folder for Vue components.
    │    │    ├──router/:    
    │    │    │   └──index.js                   # File for router view.
    │    │    ├──store/:                        
    │    │    │   ├──actions.js                 # File for Vuex methods. 
    │    │    │   ├──getters.js                 # File for computed properties for stores.
    │    │    │   ├──index.js                   
    │    │    │   ├──mutations.js               # File for state trasformations.
    │    │    │   └──state.js                   # File for stored data.
    │    │    ├──views/:                        # File for Views.
    │    │    ├──App.vue:                       
    │    │    ├──index.html:                    # Main HTML.
    │    │    └──index.js:                      
    │    ├──lib/:                               # Folder for local modules and tools.
    │    └──app.js:                             # File to run the aplication. 
    ├── studio/:                                # Sanity Folder.
    └── README.md:                              # Default README file.
