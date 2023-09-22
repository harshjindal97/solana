const dotenv = require('dotenv').config();
import web3, { SystemProgram, TransactionInstruction, clusterApiUrl, sendAndConfirmRawTransaction, sendAndConfirmTransaction } from '@solana/web3.js'
const bs58 = require('bs58');

const connection = new web3.Connection(clusterApiUrl('devnet'));

const transaction = new web3.Transaction();

const privatekey = process.env.Private_key;
// console.log(privatekey)
const secretKeyBytes = bs58.decode(privatekey);
const secretKey = new Uint8Array(secretKeyBytes);
const keypairFromSecretKey = web3.Keypair.fromSecretKey(secretKey);

const senderPublicKey = new web3.PublicKey('FoFKfrqAf2UsszvJLxVrtwQe9uFkbqkd8NWpZzUFbsN8');
const reciverPublicKey = new web3.PublicKey("ELnAYZwAJxnox7LBcAVpqqHfBBziEZGovp4FLMg9uGgh");

const transactionDetails = new web3.TransactionInstruction({
    keys:[
        {
            pubkey: senderPublicKey,
            isSigner: true,
            isWritable: true
        },
        {
            pubkey: reciverPublicKey,
            isSigner: false,
            isWritable: true
        }
    ],
    programId: web3.SystemProgram.programId,
})



const signature = async ()=>{
    const sign = await sendAndConfirmTransaction(
        connection,
        transaction.add(transactionDetails),
        [keypairFromSecretKey]
    )
    console.log(sign);
}

signature();