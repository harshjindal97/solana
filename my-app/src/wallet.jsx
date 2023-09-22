import React from 'react'
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';

import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-phantom';
import { 
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui'
import * as web3 from '@solana/web3.js';


export default function wallet() {
  const endpoint = web3.clusterApiUrl('devnet');
  const wallet = new PhantomWalletAdapter();

  


  const handleOnClick = async ()=>{
    const getProvider = () => {
      if ('phantom' in window) {
        const provider = window.phantom?.solana;
    
        if (provider?.isPhantom) {
          return provider;
        }
      }
    
      window.open('https://phantom.app/', '_blank');
    };

    const provider = getProvider(); // see "Detecting the Provider"
try {
    const resp = await provider.connect();
    console.log(resp.publicKey.toString());
} catch (err) {
}
    // wallet.connect();
  }
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[wallet]}>
        <WalletModalProvider>
          <button onClick={handleOnClick}>Connect</button>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
