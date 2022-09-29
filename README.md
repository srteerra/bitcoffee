![Logotipo 500x500 px (1)](https://user-images.githubusercontent.com/74383100/192911380-fee6c85a-d1a8-44e0-936e-69243b1357f2.gif)
# Bitcoffee

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![](https://img.shields.io/github/stars/srteerra/bitcoffee)![](https://img.shields.io/github/forks/srteerra/bitcoffee)

Bitcoffee is a CrowdFonding Dapp on the RSK network, in which anyone can raise funds for their personal interests, campaigns, charity funds, etc., as well as for their followers to follow their goals, this through the use of crypto assets such as RBTC or our own token (BITC).


## Features:

- 👁‍🗨 Pure desing.
- 🦊 Connection with Metamask.
- 📱  Easy UI and a beautiful UX Design.
- 📡 RSK Testnet Network.
- 💳 Platform with own token (BITC).
- 🌐 Under the distributed IPFS network.
- ⛏ ERC-20 Tokens transactions on RSK Blockchain.


 
 
 
 ## Built with:

- [VueJs](https://vuejs.org/) - Vuejs is a JavaScript framework for building user interfaces.
- [Web3.js](https://web3js.readthedocs.io/en/v1.8.0/) - web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
- [BootstrapVue](https://bootstrap-vue.org/) - Extensive list of components and  Bundled Javascript plugins.
- [Sanity.io](https://www.sanity.io/) - Sanity is the platform for structured content that powers remarkable digital experiences.
- [Webpack](https://webpack.js.org/) - Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.
-  [Node.js](https://nodejs.org/es/) -As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

## RoadMap:
### 🚩 Phase 1:
- Wireframes and Ui.
- Branding.
- Initial structure.
- Fleek deploy.

### 🚀 Phase 2:
- ERC-20 Token.
- Smart Contract deployed on RSK Testnet.
- Unit testing.
- Dapp v1 Launch.

### 🏁 Phase 3:
- Smart contract for memberships.
- Rebranding essentials.
- Cross-chain support.
- Dapp v2 Launch.

## Screenshots
### Home View:
![Slide 16_9 - 1](https://user-images.githubusercontent.com/74383100/192910250-2ffe2b4c-9f20-42db-9754-75288642c0a6.png)
### About View:
![Slide 16_9 - 10](https://user-images.githubusercontent.com/74383100/192911037-99ecd64d-1f47-487a-b5d8-0551516d0e3c.png)
### Our Token View:
![Slide 16_9 - 9](https://user-images.githubusercontent.com/74383100/192911090-927e92ff-3d8b-453b-be1e-4775e61ab2d9.png)
### Public Profile View:
![Slide 16_9 - 2](https://user-images.githubusercontent.com/74383100/192911120-e5eeef0e-8a5c-4607-b59e-ee9eee16f7ba.png)

## Authors:

- [@srteerra](https://www.github.com/srteerra)
- [@Guapura89](https://www.github.com/Guapura89)
- [@jonocrod12](https://github.com/jonocrod12)

## Demo:
[FigmaBitCoffee](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5GghfAuXAy1BLI8FNXynOD%2FBitcoffee%3Fnode-id%3D0%253A1 "@embed")

## Quick start
To run Bitcoffe localy:
### Prerequisites: 
 - Need a Web Browser.
 - [Metamask](https://metamask.io/) extension.
 - [Node.js](https://nodejs.org/es/) ^ 16.0.0 

## Instalation:
1. First need to create a Folder, where you will save the project.  
3. move on terminal to Folder.
```bash
cd/to/folder/file
```
2. Need to clone the repository
```bash
git clone https://github.com/srteerra/bitcoffee.git
```
3. you need install dependeces with:
```bash
npm install
```
### For development
for run app need to use:
```bash
npm run server
```

## Project Structure

    $ BitCoffee Tree
    bitcoffee/
    ├── build:
    │    ├── contracts:                         # Folder for Smart Contracts JSON.
    │    ├── Migrations.sol:                    # 
    │    └── Thosony.sol:                       # Bitcoffee Smart Contract ERC-20 token.
    ├── src/:                                   # Folder for source content.
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
    │    │    │   ├──mutations.js               # File for state trasformations
    │    │    │   └──state.js                   # File for stored data.
    │    │    ├──views/:                        # File for Views.
    │    │    ├──App.vue:                       
    │    │    ├──index.html:                    # Main HTML.
    │    │    └──index.js:                      
    │    ├──lib/:                               # Folder for local modules and tools.
    │    └──app.js:                             # File to run the aplication. 
    ├── studio/:                                # Sanity Folder.
    └── README.md:                              # Default README file.
