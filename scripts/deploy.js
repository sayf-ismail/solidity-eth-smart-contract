const main = async () => {
  const waveContractFactory = await hre.ethers.getContractFactory(
    "KiritigaWavePortal"
  );
  const waveContract = await waveContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.001"),
  });

  await waveContract.deployed();

  console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

// updated address 0xd00D001591DF4ab02d33CA3f254235646fA0A992
