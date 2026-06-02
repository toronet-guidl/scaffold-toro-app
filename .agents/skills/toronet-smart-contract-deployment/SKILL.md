---
name: toronet-smart-contract-deployment
description: Deploy Solidity smart contracts to ToroNet using toronetdeploy. Use when the user wants ToroNet deployment commands, help configuring owner and constructor args, guidance on network selection, mainnet token requirements, or Foundry remappings needed before deployment.
license: MIT
compatibility: Requires Node.js with npx. Foundry projects should have remappings configured in foundry.toml before deployment.
---

# toronet-smart-contract-deployment

## When to use

Use this skill when the user wants to:

- deploy a Solidity contract to ToroNet
- get the correct `toronetdeploy` command
- pass `--owner`, `--args`, or `--network`
- deploy from a Foundry project and configure remappings
- understand when `--token` is required
- troubleshoot ToroNet-specific deployment issues

Do not use this skill for writing the contract itself, frontend integration, or general SDK usage unless directly required to complete a ToroNet deployment task.

## Instructions

1. Treat `toronetdeploy` as the default ToroNet deployment path and build commands around the documented `npx toronetdeploy` workflow.
2. Make sure the user provides the Solidity file path, contract name, owner address, constructor arguments if needed, and target network.
3. Default the network to `testnet` unless the user explicitly asks for mainnet.
4. If the user is deploying to mainnet, mention that `--token` is required and is obtained from the ToroNet team.
5. If the contract comes from a Foundry project, make sure imports and remappings are properly configured in `foundry.toml` before deployment.
6. Prefer copyable commands.
7. If the user provides incomplete deployment details, preserve the ToroNet deployment pattern and show a realistic command template with placeholders.
8. Keep the answer focused on deployment unless the user explicitly asks for contract design or integration help.

## Default workflow

1. Identify the contract file and contract name.
2. Confirm the owner address.
3. Determine whether constructor arguments are required and the target network.
4. Check whether the contract comes from a Foundry project; if so, remind the user to verify remappings in `foundry.toml`.
5. Produce the correct `toronetdeploy` command and add only the ToroNet-specific notes needed for successful deployment.

## Checks

- file path and contract name are correct
- owner address is present
- constructor args are correctly formatted
- network is set correctly
- mainnet deployment includes `--token`
- Foundry imports/remappings are configured before deployment

See [the reference guide](references/REFERENCE.md) for the deployment workflow, command patterns, common checks, and ToroNet-specific deployment notes.

If the user is deploying from a Foundry project, also review:
assets/foundry.toml.example