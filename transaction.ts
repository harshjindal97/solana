import { SystemProgram ,Connection , LAMPORTS_PER_SOL , clusterApiUrl, sendAndConfirmTransaction , Keypair , PublicKey} from "@solana/web3.js";
const bs58 = require("bs58");
import dotenv from "dotenv";

dotenv.config();

const { Transaction } = require('@solana/web3.js');
const connection = new Connection(clusterApiUrl('devnet'));


// const ownerKeypair = Keypair.generate();
// const publicKey = ownerKeypair.publicKey;
// const secretKey = ownerKeypair.secretKey;
// console.log(secretKey);


const privatekey = process.env.Private_key;
const secretKeyBytes = bs58.decode(privatekey);
const secretKey = new Uint8Array(secretKeyBytes);
const keypairFromSecretKey = Keypair.fromSecretKey(secretKey)

const transaction = new Transaction();


const senderPublicKey = new PublicKey("FoFKfrqAf2UsszvJLxVrtwQe9uFkbqkd8NWpZzUFbsN8")
const reciverPublicKey = new PublicKey("ELnAYZwAJxnox7LBcAVpqqHfBBziEZGovp4FLMg9uGgh")
const amount = 0.1;
const transactionDetail = SystemProgram.transfer({
    fromPubkey: senderPublicKey,
    toPubkey: reciverPublicKey,
    lamports: LAMPORTS_PER_SOL * amount
})

console.log(secretKey);

transaction.add(transactionDetail);

const signature = async ()=>{
    const sign = await sendAndConfirmTransaction(
    connection , 
    transaction, 
    [keypairFromSecretKey]
)
    console.log(sign);
}
signature();