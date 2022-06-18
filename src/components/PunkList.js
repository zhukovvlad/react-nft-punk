import React from 'react';
import CollectionCard from './CollectionCard';

import './PunkList.css';

const PunkList = ({ punks, setSelectedPunk }) => {
  const renderedPunks = punks.map((punk) => {
    return <CollectionCard
            key={punk.token_id}
            punk={punk}
            setSelectedPunk={setSelectedPunk}
    />
  });
  return <div className='punkList'>{renderedPunks}</div>
};

export default PunkList;
