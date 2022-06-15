import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x8Dd973F8b26ef734A36A07be42FBA7AF48D041b1&order_direction=asc'
      );
      console.log(openseaData.data.assets);
    };

    getMyNfts();
  }, []);

  return (
    <div className='app'>
      <Header />
      <CollectionCard
        id={0}
        name={'Bandana Punk'}
        traits={[{'value': 7}]}
        image='https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=s0'
      />
    </div>
    )
}

export default App;
