import './App.css';
import React from 'react';
// import Wallet from './wallet'
import  WalletContextProvider  from './wallets/files/acessAccountInfo';
function App() {
  return (
    <>
      {/* <Wallet/> */}
      <WalletContextProvider children/>
    </>
  );
}

export default App;
