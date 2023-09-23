import './App.css';
import Wallet from './wallet'
import { BalanceDisplay } from './wallets/files/acessAccountInfo';
function App() {
  return (
    <>
      <Wallet/>
      <BalanceDisplay/>
    </>
  );
}

export default App;
