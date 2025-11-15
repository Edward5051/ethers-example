// Require packages
require ("dotenv").config();
const { ethers } = require("ethers");

// Setup connection
const URL = 'https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}';
const provide = new ethers.JsonRpcProvider(URL);

const ADDRESS = "0x6d8b201e121b8ae0421c03c21be0bb153dbf2560"
async function main() {
  // Get balance
 const balance = await provider.getBalance(ADDRESS)

  // Log balance
  console.log(balance)
}

main()