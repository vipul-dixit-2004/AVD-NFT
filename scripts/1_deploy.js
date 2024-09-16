async function main() {
  const VNFT = await ethers.getContractFactory("VNFT");
  const vNFT = await VNFT.deploy();
  console.log("Contract deployed: ", vNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
