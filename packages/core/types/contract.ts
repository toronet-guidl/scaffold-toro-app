import { Abi } from "abitype";
import { Address } from "viem";

export type GenericContract = {
  owner: Address;
  address: Address;
  abi: Abi;
  external?: boolean;
};

type Network = "testnet" | "mainnet";

export type GenericContractsDeclaration = {
  [network in Network]?: {
    [contractName: string]: GenericContract;
  };
};
