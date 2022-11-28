const { Network, Alchemy } = require("alchemy-sdk");

var fs = require('fs');
var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write("My first row\n");
  stream.write("My second row\n");
  stream.end();
});

var omkarMetaTestAdd = "0x292146a7442447242a9bdDF04d2e7C4a53e90DBf"
var omkarMetaRealETH = "0x567387448f95b547b50efecb9c60b391203bcb3e"

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'oZzgNzeI7vjsWgtHNUfa_NfTdGrSmWKw', // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

const baycAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';

// Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances(omkarMetaTestAdd).then(console.log);

// Access the Alchemy NFT API
alchemy.nft.getNftsForOwner('vitalik.eth').then(console.log);

// // Access WebSockets and Alchemy-specific WS methods
// alchemy.ws.on(
//   {
//     method: 'alchemy_pendingTransactions'
//   },
//   res => console.log(res)
// );

// async function main() {
//     for await (const nft of alchemy.nft.getNftsForContractIterator(baycAddress, {
//       // Omit the NFT metadata for smaller payloads.
//       omitMetadata: true,
//     })) {
//       await alchemy.nft
//         .getOwnersForNft(nft.contract.address, nft.tokenId)
//         .then((response) =>
//           console.log("owners:", response.owners, "tokenId:", nft.tokenId)
//         );
//     }

//     for await (const nft of alchemy.nft.getNftsForOwnerIterator('vitalik.eth')) {
//         console.log(nft.media);
//     }
//   }
  
//   main();

//   alchemy.nft.getNftsForOwner('vitalik.eth', {
//     excludeFilters: [NftExcludeFilters.SPAM]
//   }).then(console.log);