"use client"

import {FC , ReactNode } from "react";
import { ConnectionProvider , WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js"
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets"
require('@solana/wallet-adapter-react-ui/styles.css');
export const WallettAdapter: FC<{children:ReactNode}> = ({children}) =>{

    const endpoint = web3.clusterApiUrl('devnet')
    const wallet = new walletAdapterWallets.PhantomWalletAdapter()

    return(
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={[wallet]}>
                <WalletModalProvider>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}


