import {
  createWallet,
  importWalletFromPrivateKeyAndPassword,
  verifyWalletPassword,
  getWalletKey,
} from "torosdk";

async function createToroWallet() {
  const walletAddress = await createWallet({
    username: "myuser123",
    password: "securePassword123",
  });

  console.log("Wallet Address:", walletAddress);
}

async function importToroWallet() {
  const address = await importWalletFromPrivateKeyAndPassword({
    pvKey: "yourPrivateKeyHere",
    password: "yourPasswordHere",
  });

  console.log("Imported Wallet Address:", address);
}

async function verifyToroWalletPassword() {
  const isValid = await verifyWalletPassword({
    address: "0xYourAddress",
    password: "yourPassword",
  });

  console.log("Password is correct:", isValid);
}

async function readToroWalletKey() {
  const key = await getWalletKey({
    address: "0xYourWalletAddress",
  });

  console.log("Wallet Key:", key);
}
