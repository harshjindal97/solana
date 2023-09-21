import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const {clusterApiUrl, Connection , PublicKey} = require('@solana/web3.js')

async function getBalanceUsingWeb3(address: string): Promise<number> {
    const connection = new Connection(clusterApiUrl('devnet'));
    const publickey = new PublicKey(address);
    console.log(await connection.getBalance(publickey)/LAMPORTS_PER_SOL);
    // console.log(await connection.getBalance(publickey));
    return await connection.getBalance(publickey);
}

getBalanceUsingWeb3('FoFKfrqAf2UsszvJLxVrtwQe9uFkbqkd8NWpZzUFbsN8');