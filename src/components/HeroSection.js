import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-container'>
      <h1>Discover and purchase <br/> amazing NFTs</h1>
      <p>CulChain is a Culturally based NFT, bringing Blockchain and <br/>
      the ideas,
      customs, and social behaviour of humans together.<br/>
      Making modern technology and historical memories one.</p>
      <div className='hero-btns'>
        <Button
          children="onnect Wallet"
          className='btn'
          onClick={console.log('hey')}
        >
          {props.children}
          Connect Wallet
        </Button>
      </div>
      <div className="cont">
        <div className="container1"></div>
        <div className="container2"></div>
        <div className="container3"></div>
        <div className="container4"></div>
        <div className="container5"></div>
        <div className="container6"></div>
      </div>
    </div>
  );
}

export default HeroSection;
