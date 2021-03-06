const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT()

    await txn.wait()

    txn = await nftContract.makeAnEpicNFT()

    await txn.wait()
    txn = await nftContract.makeAnEpicNFT()

    await txn.wait()
    txn = await nftContract.makeAnEpicNFT()

    await txn.wait()

    let mint_count = await nftContract.getTotalNFTsMintedSoFar()

    console.log(mint_count)


};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();

//this script is for testing in hardhat without actually deploying to a testnet or mainnet.
