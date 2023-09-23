import { useWallet , useConnection } from '@solana/wallet-adapter-react';
import {FC , useState , useEffect} from 'react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import React from 'react';

export const BalanceDisplay = ()=> {
    const [balance , setBalance] = useState(0);
    const {connection} = useConnection();
    const {publicKey } = useWallet();

    useEffect(()=>{
        if(!publicKey || !connection){
        return;
    }
    

    connection.onAccountChange(
        publicKey,
        (accountInfo) => {
            setBalance(accountInfo.lamports);
        },
        "confirmed",
    )

    connection.getAccountInfo(publicKey).then((info)=> {
        if(info){
            setBalance(info.lamports);
        }
        else{
            console.log("info is empty")
        }
    }); 

} , [connection , publicKey]
);

    return (
        <div>
            <p>{publicKey ? `Balance: ${balance / LAMPORTS_PER_SOL} SOL` : ""}</p>
        </div>
    );


}