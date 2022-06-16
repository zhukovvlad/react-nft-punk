import React from 'react';

import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

import './Main.css';

const Main = ({ activePunk }) => {
  return (
    <div className='main'>
        <div className='mainContent'>
            <div className='punkHighLight'>
                <div className='punkContainer'>
                    <img
                        className='selectedPunk'
                        src={
                            'https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=s0'
                        }
                        alt=''
                    />
                </div>
            </div>

            <div className='punkDetails' style={{ color: '#fff' }}>
                <div className='title'>
                    Bandana Punk
                </div>
                <span className='itemNumber'>•#3</span>
            </div>

            <div className='owner'>
                <div className='ownerImageContainer'>
                    <img
                        src={
                        'https://storage.googleapis.com/opensea-static/opensea-profile/28.png'
                        }
                        alt=''
                    />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div className='ownerContract'>0xdd6c8baf81f19970b5960bd09517729426075b71</div>
                        <div className='ownerHandle'>@zhukovvlad</div>
                    </div>
                    <div className='ownerLink'>
                        <img src={instagramLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={twitterLogo} alt='' />
                    </div>
                    <div className='ownerLink'>
                        <img src={moreIcon} alt='' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Main;
