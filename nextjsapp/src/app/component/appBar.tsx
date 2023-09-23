"use client"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export const AppBar = ()=>{
    return(
        <div>
            <WalletMultiButton>
                connect
            </WalletMultiButton>
        </div>
    )
}