import { useWallet , useConnection } from "@solana/wallet-adapter-react";
import { Movie } from "../modal/movie";
import { useEffect, useState } from "react";
import * as web3 from '@solana/web3.js'
import { text } from "stream/consumers";


export const MovieList = ()=> {
    const {connection} = useConnection();
    const {publicKey , sendTransaction} = useWallet();
    const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'
    const [movie , setMovie] = useState<Movie[]>([]);

    useEffect(()=>{
        connection.getProgramAccounts(new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)).then(async (account)=>{
            try {
                const movies: Movie[] = account.map(({account})=>{
                    return Movie.deserialize(account.data);
                })
                setMovie(movies);
            } catch (error) {
                console.log(error);
            }
            
        })
    })

    return (
        <div>
            {
        movie.map((movies, i) => {return (
            <text>{movies.title}</text>
        ) })
      }
        </div>
    )
};