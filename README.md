# ideamarket

Idea marketplace where ideas are a gated dynamic NFT that opens up to different team players (makers/developers, customers, investors, experts) incentivized to progress the idea into the real world.

Client side app currently at:
https://tidai-app.web.app/

## development

1.  Run `yarn`
2.  In one terminal to start react app on localhost:3000
3.  Run `yarn start`
4.  In another terminal to start firebase emulators on localhost:4000
5.  Run `yarn emulators`

# 🏄‍♂️ Quick Start

### Manual setup

Prerequisites: [Node](https://nodejs.org/en/download/) plus [Yarn](https://classic.yarnpkg.com/en/docs/install/) and [Git](https://git-scm.com/downloads)

> install and start your 👷‍ Hardhat chain:

```bash
yarn install
yarn chain
```

> in a second terminal window, start your 📱 frontend:

```bash
yarn start
```

> in a third terminal window, 🛰 deploy your contract:

```
yarn deploy --network NETWORK_OF_CHOICE (localhost, kovan, rinkeby, mainnet)
```

🔏 Edit your smart contract `YourContract.sol` in ``

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

💼 Edit your deployment scripts in ``

📱 Open http://localhost:3000 to see the app

> ✏️ Edit the mint script mint.js in packages/hardhat/scripts and update the toAddress to your frontend address (wallet address in the top right or localhost:3000).

![nft1](https://user-images.githubusercontent.com/526558/124386962-37e5dd00-dcb3-11eb-911e-0afce760d7ee.png)

> in a terminal window run the mint script:

```
yarn mint
```

![nft2](https://user-images.githubusercontent.com/526558/124386972-3d432780-dcb3-11eb-933e-dad7dfd313b2.png)

👀 You should see your collectibles show up if you minted to the correct address:

![nft3](https://user-images.githubusercontent.com/526558/124386983-48965300-dcb3-11eb-88a7-e88ad6307976.png)

👛 Open an incognito window and navigate to http://localhost:3000 (You'll notice it has a new wallet address).

⛽️ Grab some gas for each account using the faucet:

![nft4](https://user-images.githubusercontent.com/526558/124387005-55b34200-dcb3-11eb-8565-1ee40b5634ad.png)

🎟 Send an NFT to the incognito window address:

![nft5](https://user-images.githubusercontent.com/526558/124387008-58ae3280-dcb3-11eb-920d-07b6118f1ab2.png)

🕵🏻‍♂️ Inspect the `Debug Contracts` tab to figure out what address is the `owner` of `YourCollectible`?

💼 Edit your deployment script `deploy.js` in `packages/hardhat/scripts`

🔏 Edit your smart contract `YourCollectible.sol` in `packages/hardhat/contracts`

📝 Edit your frontend `App.jsx` in `packages/react-app/src`

🔑 Create wallet links to your app with `yarn wallet` and `yarn fundedwallet`

⬇️ Installing a new package to your frontend? You need to `cd packages/react-app` and then `yarn add PACKAGE`

# 📡 Deploy NFT smart contract!

🛰 Ready to deploy to a testnet?

> Change the `defaultNetwork` in `packages/hardhat/hardhat.config.js`

![nft6](https://user-images.githubusercontent.com/526558/124387061-7a0f1e80-dcb3-11eb-9f4c-19229f43adec.png)

🔐 Generate a deploy account with `yarn generate`

![nft7](https://user-images.githubusercontent.com/526558/124387064-7d0a0f00-dcb3-11eb-9d0c-195f93547fb9.png)

👛 View your deployer address using `yarn account` (You'll need to fund this account. Hint: use an instant wallet to fund your account via QR code)

![nft8](https://user-images.githubusercontent.com/526558/124387068-8004ff80-dcb3-11eb-9d0f-43fba2b3b791.png)

👨‍🎤 Deploy your NFT smart contract:

Make sure your target network is present in the hardhat networks config, then either update the default network in `hardhat.config.js` to your network of choice or run:

```
yarn deploy --network NETWORK_OF_CHOICE
```

> ✏️ Edit your frontend `App.jsx` in `packages/react-app/src` to change the `targetNetwork` to wherever you deployed your contract:

![nft9](https://user-images.githubusercontent.com/526558/124387095-9743ed00-dcb3-11eb-8ea5-afc25d7fef80.png)

You should see the correct network in the frontend:

![nft10](https://user-images.githubusercontent.com/526558/124387099-9a3edd80-dcb3-11eb-9a57-54a7d370589a.png)

🎫 Ready to mint a batch of NFTs for reals?

```
yarn mint
```

Once verified, they will then be available to view on Tenderly!

![nft11](https://user-images.githubusercontent.com/526558/124387132-b04c9e00-dcb3-11eb-95d1-03b8c272e52f.png)

# 🔭 Learning Solidity

📕 Read the docs: https://docs.soliditylang.org

📚 Go through each topic from [solidity by example](https://solidity-by-example.org) editing `YourContract.sol` in **🏗 scaffold-eth**

- [Primitive Data Types](https://solidity-by-example.org/primitives/)
- [Mappings](https://solidity-by-example.org/mapping/)
- [Structs](https://solidity-by-example.org/structs/)
- [Modifiers](https://solidity-by-example.org/function-modifier/)
- [Events](https://solidity-by-example.org/events/)
- [Inheritance](https://solidity-by-example.org/inheritance/)
- [Payable](https://solidity-by-example.org/payable/)
- [Fallback](https://solidity-by-example.org/fallback/)

📧 Learn the [Solidity globals and units](https://solidity.readthedocs.io/en/v0.6.6/units-and-global-variables.html)
