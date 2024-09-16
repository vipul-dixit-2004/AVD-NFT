require("dotenv").config();

const { API_KEY, PRIVATE_KEY, PUBLIC_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");

const web3 = createAlchemyWeb3(API_KEY);

const contract = require("../artifacts/contracts/VNFT.sol/VNFT.json");

const contractAddress = "0xbd9eba6fF73e0aEfc5678eccd908BCDf1bf5156a";

const instance = new web3.eth.Contract(contract.abi, contractAddress);

const mintNFT = async (tokenURI) => {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, "latest");
  const tx = {
    from: PUBLIC_KEY,
    to: contractAddress,
    nonce: nonce,
    gas: 500000,
    data: instance.methods.minNFT(PUBLIC_KEY, tokenURI).encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  console.log(signedTx);
  try {
    const hash = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log("Trx was complete! Trx Hash: ", hash);
  } catch (err) {
    console.log("Transaction failed:\n ", err);
  }
};

mintNFT(
  "https://apricot-accurate-hare-252.mypinata.cloud/ipfs/Qmb2VtLgXB7XSi18DhYZLowq6dR8YLv33Zn68YuAxSeFJn"
);
