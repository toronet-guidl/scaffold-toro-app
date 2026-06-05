const { deployContract } = require("toronetdeploy");
const { dumpContractDetailsToFrontendModule } = require("./scaffold/dumpToFrontend");

const OWNER = "<Owner Address>"; // Update with the actual owner address
const FILE = "src/Counter.sol";
const CONTRACT_NAME = "Counter";
const CONSTRUCTOR_ARGS = [];
const NETWORK = "testnet";
const TOKEN = ""; // Required for Mainnet deployment, can be left empty for testnet

async function main() {
  if (!OWNER || OWNER === "<Owner Address>") {
    console.error("");
    console.error("Owner Address not set");
    console.error("");
    console.error("Update the owner address in the deploy script before deploying contracts.");
    console.error(`Go to contracts/scripts/deploy.js to update the owner address.`);
    console.error("");
    process.exit(1);
  }

  const contract = await deployContract({
    file: FILE,
    contract: CONTRACT_NAME,
    owner: OWNER,
    network: NETWORK,
    args: CONSTRUCTOR_ARGS,
    token: TOKEN,
    skipDump: false, // Set to true to skip dumping the contract details to a file
  });
  console.log(CONTRACT_NAME, "deployed to:", contract.address);

  /// Sharing contract details with the frontend
  console.log("Writing deployed contract to deployedContract.ts");
  dumpContractDetailsToFrontendModule({
    network: NETWORK,
    abi: contract.abi,
    address: contract.address,
    contractName: CONTRACT_NAME,
    owner: OWNER,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
