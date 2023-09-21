const { Connection, PublicKey } = require('@solana/web3.js');

const connection = new Connection("https://api.devnet.solana.com");
const recipientAddress = new PublicKey("FoFKfrqAf2UsszvJLxVrtwQe9uFkbqkd8NWpZzUFbsN8");
const lamports = 1000000000; // Amount in lamports

connection.requestAirdrop(recipientAddress, lamports)
  .then((txid: string) => { // Specify the type of txid as string
    console.log("Airdrop successful. Transaction ID:", txid);
  })
  .catch((error: Error) => { // Specify the type of error as Error
    console.error("Airdrop request failed with error:", error);
  });
