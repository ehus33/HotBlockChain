module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Any network
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        );
      },
      network_id: 4, // Rinkeby's id
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },
};
