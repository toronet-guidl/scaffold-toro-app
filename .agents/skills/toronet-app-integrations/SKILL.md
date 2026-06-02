---
name: toronet-app-integrations
description: Integrate ToroNet into frontend or backend apps. Use when the user wants ToroNet network configuration, contract reads with ethers.js or wagmi, wallet-based writes, or server-side writes through the ToroNet keystore API.
license: MIT
compatibility: Suitable for JavaScript or TypeScript apps using ethers.js, wagmi, or backend HTTP clients. Wallet-based writes require an EVM wallet. API-based writes should be done from a trusted backend.
---

# toronet-app-integrations

## When to use

Use this skill when the user wants to:

- configure ToroNet in a frontend or backend app
- use the correct ToroNet testnet network configuration
- read from ToroNet with ethers.js or wagmi
- write to ToroNet through a connected EVM wallet
- perform contract writes through the ToroNet keystore API
- decide between wallet-based and API-based transaction flows

Do not use this skill for smart contract authoring, deployment with `toronetdeploy`, or SDK-only workflows unless directly needed for app integration.

## Instructions

1. Split ToroNet integrations into read and write.
2. For reads, use ethers.js or wagmi, ensure the ToroNet network and RPC URL are correct, and use the contract ABI and address provided by the user.
3. For writes, choose the path that matches the product need: wallet-based when the end user should approve transactions in their wallet, API-based when the product needs a more seamless experience without repeated wallet prompts.
4. Treat wallet-based writes as the default client-side write pattern: ask the user to connect an EVM wallet such as MetaMask, prompt the wallet for transactions, and keep signing and approval inside the wallet flow.
5. Treat ToroNet keystore API writes as a backend or trusted-server pattern: do not expose ToroNet keystore credentials in the browser, keep `addr`, `pwd`, ABI payloads, and transaction execution on the server, and note that the credentials used for these API calls can be created and verified using the ToroNet SDK.
6. When working on testnet, use the provided testnet configuration and testnet keystore API URL; on mainnet, use the provided mainnet keystore API URL and do not invent an EVM mainnet RPC configuration unless the user provides it.
7. If the user asks for code examples, keep them practical, separate read and write examples, and clearly label whether a write example is wallet-based or API-based.
8. Keep answers focused on integration, not smart contract development or deployment.

## Default workflow

1. Determine whether the task is a read or a write integration.
2. Determine whether the app is frontend-only or has a backend.
3. Configure ToroNet network access first.
4. For reads, use ethers.js or wagmi with the correct RPC URL.
5. For writes, choose between wallet-based or API-based execution; if API-based, move the transaction logic to a trusted backend.
6. Return code or architecture guidance that matches the chosen integration pattern and include a short security note when API-based writes are involved.

## Checks

- correct RPC URL and chain ID are used
- ABI and contract address are present
- wallet-based writes use an EVM wallet
- API-based writes come from a trusted backend
- ToroNet keystore credentials are not exposed in client-side code

See [the reference guide](references/REFERENCE.md) for network details, integration patterns, security guidance, and example request structures.

Relevant assets:

- `assets/toronet-testnet.ts`
- `assets/toronet-keystore-api.examples.json`