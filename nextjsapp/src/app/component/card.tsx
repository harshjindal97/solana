"use client"
import {FC} from 'react';
import { useState , ChangeEvent} from 'react'
import { Movie } from '../modal/movie';
import '../globals.css'
import './card.css'
import * as web3 from '@solana/web3.js'
// import { sendAndConfirmTransaction } from '@solana/web3.js';
import { useConnection , useWallet } from '@solana/wallet-adapter-react';



export const Card =()=>{
    const {connection} = useConnection();
    const {publicKey , sendTransaction} = useWallet();
    const [name , setName] = useState('');
    const [review , setReview] = useState('');
    const [rating , setRating] = useState(0);
const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'


    const onChange = (event: ChangeEvent<HTMLTextAreaElement>)=>{
        setName(event.target.value);
    }

    const onChange1 = (event: ChangeEvent<HTMLTextAreaElement>)=>{
        setReview(event.target.value);
    }
    const onChange2 = (event: ChangeEvent<HTMLTextAreaElement>)=>{
        setRating(parseInt(event.target.value));
    }

    const handleTransactionSubmit = async (movie:Movie)=>{
        if(!publicKey){
            alert("please connect to your wallet")
            return;
        }
        const buffer = movie.serialize();
        const transaction = new web3.Transaction()

        const [pda] = await web3.PublicKey.findProgramAddress(
            [publicKey.toBuffer() , Buffer.from(movie.title)],
            new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        );

        const transactionInstruction = new web3.TransactionInstruction({
            keys:[
                {
                    pubkey:publicKey,
                    isSigner:true,
                    isWritable:false
                },
                {
                    pubkey:pda,
                    isSigner:false,
                    isWritable:true 
                },
                {
                    pubkey:web3.SystemProgram.programId,
                    isSigner:false,
                    isWritable:false 
                }
            ],
            data: buffer,
            programId: new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
        })
        transaction.add(transactionInstruction);

        try {
            let txid = await sendTransaction(transaction, connection)
            console.log(`Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`)
          } catch (e) {
            alert(JSON.stringify(e))
          }
    }

    const onClick = ()=>{
        const movie = new Movie(name ,  rating , review )
        handleTransactionSubmit(movie);
    }
    return(
        <div className="card">
            <div className="card-form">
                <textarea name="" id="" placeholder='movie name' onChange={onChange}></textarea>
                <textarea name="" id="" placeholder='movie review' onChange={onChange1}></textarea>
                <textarea name="" id="" placeholder='movie rating' onChange={onChange2}></textarea>
                <button onClick={onClick}>submit</button>
            </div>
        </div>)
}