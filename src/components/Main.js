import React from 'react';

import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

import './Main.css';

const Main = ({ selectedPunk }) => {
    if (!selectedPunk) {
        return <div>Loading punks...</div>
    }
    
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighLight'>
                    <div className='punkContainer'>
                        <img
                            className='selectedPunk'
                            src={selectedPunk.image_original_url}
                            alt=''
                        />
                    </div>
                </div>    
                <div className='punkDetails' style={{ color: '#fff' }}>
                    <div className='title'>
                        {selectedPunk.name}
                        <span className='itemNumber'>•#{selectedPunk.token_id}</span>
                    </div>
                  
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img
                                src={selectedPunk.owner.profile_img_url}
                                alt=''
                            />
                        </div>
                        <div className='ownerDetails'>
                            <div className='ownerNameAndHandle'>
                                <div className='ownerContract'>{selectedPunk.owner.address}</div>
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
        </div>
    )
};

export default Main;
