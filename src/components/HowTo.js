import React from 'react';
import './HowTo.css';
import wallet from '../assests/images/wallet.svg';
import cart from '../assests/images/cart.svg';
import search from '../assests/images/search.svg';

function HowTo() {
    return (
        <div className='howTo'>
            <h1>How To Buy NFTs</h1>
            <div className="cardds">
                <div className="card">
                    <img src={search}/>
                    <h2 className='step'> Step 1</h2>
                    <h2>Connect your wallet or create a new Solana Wallet. (Currently we support just Sollet Wallet).</h2>
                </div>
                <div className="card">
                    <img className="wallet" src={wallet}/>
                    <h2 className="step">Step 2</h2>
                    <h2>Top up your wallet with SOL Tokens.</h2>
                </div>
                <div className="card">
                    <img className="wallet" src={cart}/>
                    <h2 className="step">Step 3</h2>
                    <h2>Purchase the NFT. (Note: you can only purchase one at a time).</h2>
                </div>
            </div>
        </div>
    )
}

export default HowTo;
