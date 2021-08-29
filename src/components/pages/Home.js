import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import HowTo from '../HowTo';
import Roadmap from '../Roadmap';
const style = {
        backgroundColor : 'blue'}
function Home() {
  return (
    <>
      <HeroSection buttonStyle='btnS' />
      <Cards name='Ongoing Sales' />
      <HowTo />
      <Cards name ='Live Auction' children='Explore Market' backgroundColor={'blue'}/>
      <Roadmap />
   
      <Footer />
    </>
  );
}

export default Home;
