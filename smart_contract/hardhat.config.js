require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/_zKKjX4uq8rMgYCmJ0boaugnMuolzKee",
      accounts: [
        "43c1cc322b0b0086dcdefff1059541a43f818b5815d72653452102c6155343b5",
      ],
    },
  },
};
