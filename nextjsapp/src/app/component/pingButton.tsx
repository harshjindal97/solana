"use client"
import { FC , useState } from "react";
import * as web3 from "@solana/web3.js"
import {LAMPORTS_PER_SOL} from "@solana/web3.js"
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";


export const Ping: FC = ()=>{
    const {connection} = useConnection();
    let {publicKey , sendTransaction} = useWallet();
    // const ProgramId = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
    // const DataAccountPubKey = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

    const onClick = ()=>{
        if(!publicKey || !connection){
            return
        }else{
        // publicKey = new web3.PublicKey(publicKey);
        // const Program_id = new web3.PublicKey(ProgramId);
        // const dataAccount = new web3.PublicKey(DataAccountPubKey);
        const [txSig, setTxSig] = useState('');
        const rPubKey = ""
        const receiverPubKey = new web3.PublicKey(rPubKey)
        const amount = 0.1;

        const transaction = new web3.Transaction();
        const data = web3.SystemProgram.transfer({
            fromPubkey:publicKey,
            toPubkey:receiverPubKey,
            lamports:LAMPORTS_PER_SOL*amount
        })

        transaction.add(data);

        sendTransaction(transaction , connection).then((sig)=>{
            setTxSig(sig);
        });


        console.log("ping");
    }}
    return(
        <div>
            <button onClick={onClick}>ping</button>
        </div>
    )
}