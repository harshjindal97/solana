import React from 'react'
import './wallet.css';
import {ConnectionProvider,WalletProvider} from '@solana/wallet-adapter-react';
import {PhantomWalletAdapter} from '@solana/wallet-adapter-phantom';
import { WalletModalProvider,WalletMultiButton , WalletModalButton , WalletDisconnectButton} from '@solana/wallet-adapter-react-ui'
import * as web3 from '@solana/web3.js';


export default function wallet() {
  const endpoint = web3.clusterApiUrl('devnet');
  const wallet = new PhantomWalletAdapter();

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[wallet]}>
        <WalletModalProvider>
          {/* <WalletMultiButton id="connect_btn" >Connect</WalletMultiButton> */}
          <WalletModalButton>Connect</WalletModalButton>
          <WalletDisconnectButton>Disconnect</WalletDisconnectButton>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}




// const handleOnClick = async ()=>{
  //     const getProvider = () => {
  //       if ('phantom' in window) {
  //         const provider = window.phantom?.solana;    
  //         if (provider?.isPhantom) {
  //           return provider;
  //         }}};
  //     const provider = getProvider(); // see "Detecting the Provider"
  // try {
  //     const resp = await provider.connect();
  //     console.log(resp.publicKey.toString());
  // } catch (err) {
  // }
  // }