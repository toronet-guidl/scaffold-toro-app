> This project was created using [`npx create-toro@latest`](https://github.com/toronet-guidl/create-toro).

# scaffold-toro-app

ScaffoldToro is an opinionated, batteries-included development toolkit for building decentralized applications on the Toronet blockchain. It's designed to make it easier for developers to create and deploy smart contracts and build user interfaces that interact with those contracts.

Built using NextJS, Foundry/Hardhat, Wagmi, Viem, and Typescript.

## Requirements

Before you begin, you need to install the following tools:
- Node
- PNPM
- Git

## 📁 Project Structure

The project is structured as a monorepo containing:

- **Frontend App**: Located in the [packages/core](./packages/core) directory.
- **Smart Contract Environment**: Located in the [packages/contracts](./packages/contracts) directory.

---

## 🚀 Commands Guide

The following are the key scripts defined in [package.json](./package.json):

### 1. Start Frontend App

To run the frontend app in development mode with hot-reloading:

```bash
pnpm dev
# or
pnpm core:dev
```

*To build and start the frontend in production mode:*

```bash
pnpm build
pnpm start
```

### 2. Compile Smart Contracts

To compile your smart contracts using the configured compiler:

```bash
pnpm compile
# or
pnpm contracts:compile
```

### 3. Deploy Smart Contracts

To deploy your smart contracts to the Toronet network:

```bash
pnpm deploy
# or
pnpm contracts:deploy
```

---

## ⚙️ Contract Deployment Configuration

All configurations regarding the contract deployment process are managed in [deploy.js](./packages/contracts/scripts/deploy.js).

> [!IMPORTANT]
> **Before Deploying:** You must set the owner address in [deploy.js](./packages/contracts/scripts/deploy.js) by updating the `OWNER` constant:
> ```javascript
> const OWNER = "0xYourOwnerAddress...";
> ```

### Customizing Deployments

If you add or want to deploy another contract, modify the variables at the top of [deploy.js](./packages/contracts/scripts/deploy.js):

- **`FILE`**: Specify the file path of your contract (e.g., `"src/Counter.sol"`).
- **`CONTRACT_NAME`**: Set the name of the contract to deploy (e.g., `"Counter"`).
- **`CONSTRUCTOR_ARGS`**: Pass constructor arguments as an array (e.g., `[]` or `["Arg1", 123]`).
- **`NETWORK`**: Set to `"testnet"` or `"mainnet"` depending on where you want to deploy.
- **`TOKEN`**: Set the token (required for Mainnet deployments).

```javascript
// Example configurations inside deploy.js
const OWNER = "0xEf5537aD8C25aed1a816A0408dee53005cA05bA1"; 
const FILE = "src/Counter.sol";
const CONTRACT_NAME = "Counter";
const CONSTRUCTOR_ARGS = [];
const NETWORK = "testnet";
const TOKEN = ""; 
```

## Contributing to Scaffold-Toro

We welcome contributions to Scaffold-Toro
