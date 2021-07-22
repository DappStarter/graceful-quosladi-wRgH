require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remind concert hunt opinion blue sing'; 
let testAccounts = [
"0x5263e71f09c215252ae04387baf7e35517936576b35934ea9dca7d5b42740ac9",
"0xe22b51cb214af58cf120c62b372567a27e220842671da2ba10ce4d69e827eec4",
"0xfa7d412e43d2198128451243bd3c8462e52cc994549cfd800f12b989973ffe8c",
"0xf28d9f15f88de838f4110cd630bc5ac8be27f8d9979486c4bbf792b80fbf65af",
"0xd5ce56356d46f022e51c01ae61add41b1c835c06def00e36b2e93ecb84f447ab",
"0x336a0c329a6a79d0176ee05153d39071bd984473edfeb036052e9e01cb9eccc5",
"0x64ae2d382523d0f5a4347f12d71eb4bcb6239b9dbf6f56da79cf584c846f621f",
"0xefb5e892d5dad2891c8705a76f1d9da54892be26a41700aa97de5dbea5fd6a4f",
"0xc49404b518ce65bfbbf55636772cfe4924214c96e79f299a5bed056ccb0d0582",
"0x312c228316716f9ffc7cab6af44c65bf4781102d743e664cbc226cc8c29d551e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

