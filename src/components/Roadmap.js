import React from 'react';
import './Roadmap.css'

function Roadmap() {
    return (
        <div className='roadmap'>
            <header>
                <h1>Road Map</h1>
                <h3>Q3 2021 - Civilization begins</h3>
            </header>
            <ul className='timeline'>
                <li>
                    <div className='direction-r'>
                        <div className='flag-wrapper'>
                            <span className="hexa"></span>
                            <span className="flag">Q3</span>
                            <span className="time-wrapper"><span className="time">2021</span></span>
                        </div>
                        <div className="desc">Twitter/Discord NFT Giveaway</div>
                    </div>
                </li>
                <li>
                    <div className='direction-l'>
                        <div className='flag-wrapper'>
                            <span className="hexa"></span>
                            <span className="flag">Q3</span>
                            <span className="time-wrapper"><span className="time">2021</span></span>
                        </div>
                        <div className="desc">Website Launch</div>
                    </div>
                </li>
                <li>
                    <div className='direction-r'>
                        <div className='flag-wrapper'>
                            <span className="hexa"></span>
                            <span className="flag">Q3</span>
                            <span className="time-wrapper"><span className="time">2021</span></span>
                        </div>
                        <div className="desc">NFTs Sales</div>
                    </div>
                </li>
                <li>
                    <div className='direction-l'>
                        <div className='flag-wrapper'>
                            <span className="hexa"></span>
                            <span className="flag">Q3</span>
                            <span className="time-wrapper"><span className="time">2021</span></span>
                        </div>
                        <div className="desc">NFT Airdrop to xxx Holders</div>
                    </div>
                </li>
                
            </ul>
        </div>
    )
}

export default Roadmap
