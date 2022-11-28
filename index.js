const { Network, Alchemy } = require("alchemy-sdk");

var moment = require('moment')

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "oZzgNzeI7vjsWgtHNUfa_NfTdGrSmWKw", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);


async function main() {
  var starttime = moment().format();
  console.log(starttime)
  const latestBlock = await alchemy.core.getBlockNumber();
  var endtime = moment().format();
  console.log(endtime)
  console.log("The latest block number is", latestBlock);
}

main();