require('babel-register')({
  ignore: /node_modules\/(?!zeppelin-solidity)/
});
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 0xfffffffff
    },
    ropsten: {
      host: "localhost",
      network_id: 3,
      port: 8545,
      gas: 2900000
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*'
    }
  }
};
