import { GenericContractsDeclaration } from "@/types/contract";

/**
 * @example
 * const externalContracts = {
 *   testnet: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *       external: true
 *     },
 *   },
 * } as const;
 */
const externalContracts = {} as const;

export default externalContracts satisfies GenericContractsDeclaration;
