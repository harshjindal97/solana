"use client"
import { FC , useState, ChangeEvent } from "react";
import * as web3 from "@solana/web3.js"
import {LAMPORTS_PER_SOL} from "@solana/web3.js"
import { useConnection } from "@solana/wallet-adapter-react";
import { useWallet } from "@solana/wallet-adapter-react";


export const Ping: FC = ()=>{
    const {connection} = useConnection();
    const [receiverPubKey , setReceiverPubKey] = useState('');
    const [amount , setAmount] = useState(0);
    const [txSig, setTxSig] = useState('');
        let {publicKey , sendTransaction} = useWallet();
    // const ProgramId = "ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa";
    // const DataAccountPubKey = "Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod";

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        event.preventDefault();
        setReceiverPubKey(event.target.value);
        console.log(receiverPubKey)
    }

    const onChange2 = (event: ChangeEvent<HTMLTextAreaElement>) =>{
        event.preventDefault();
        let x = parseFloat(event.target.value)
        setAmount(x);
        console.log(amount)
    }

    const onClick = ()=>{
        if(!publicKey || !connection){
            return
        }else{
        // publicKey = new web3.PublicKey(publicKey);
        // const Program_id = new web3.PublicKey(ProgramId);
        // const dataAccount = new web3.PublicKey(DataAccountPubKey);
        const rPubKey = ""
        const receiversPubKey = new web3.PublicKey(receiverPubKey)
        // const amount = 0.1;

        const transaction = new web3.Transaction();
        const data = web3.SystemProgram.transfer({
            fromPubkey:publicKey,
            toPubkey:receiversPubKey,
            lamports:LAMPORTS_PER_SOL*amount
        })

        transaction.add(data);

        sendTransaction(transaction , connection).then((sig)=>{
            setTxSig(sig);
            console.log(sig);
        });
    }}
    return(
        <div>
            <textarea name="" id="" placeholder="receiver address" onChange={onChange}></textarea>
            <textarea name="" id="" placeholder="amount" onChange={onChange2}></textarea>
            <button onClick={onClick}>ping</button>
        </div>
    )
}