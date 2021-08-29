import React, { useEffect, useState } from "react";
import { Connection } from "@solana/web3.js";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sender from './components/Sender';
import {
  getTransactions,
  TransactionWithSignature,
} from './components/helpers/transactions';
import { initWallet, WalletAdapter } from './components/helpers/wallet';

function App() {
  const [transactions, setTransactions] =
    useState<Array<TransactionWithSignature>>();
  const conn = React.useRef<Connection>();
  const wall = React.useRef<WalletAdapter>();

  useEffect(() => {
    initWallet().then(([connection, wallet]: [Connection, WalletAdapter]) => {
      conn.current = connection;
      wall.current = wallet;
      if (wallet.publicKey) {
        getTransactions(connection, wallet.publicKey).then((trans) => {
          setTransactions(trans);
        });
      }
    });
  }, []);

  const didSendMoney = () => {
    getTransactions(conn.current!, wall.current!.publicKey!).then((trans) => {
      setTransactions(trans);
    });
  };
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/twitter' component={() => { 
            window.location.href = 'https://twitter.com/culchain'; 
            return null;
          }} />
          <Route path='/discord' component={() => { 
            window.location.href = 'https://discord.gg/WqhUMm8DKa'; 
            return null;
          }} />
          <Route path='/marketplace' component={() => { 
            window.location.href = "https://'+{props.label}+'/WqhUMm8DKa'"; 
            return null;
          }} />
          <Route path='/sign-up' component={} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
