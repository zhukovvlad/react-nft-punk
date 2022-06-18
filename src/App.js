import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import PunkList from './components/PunkList';
import Main from './components/Main';

import usePunks from './components/hooks/usePunks';

function App() {
  // const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(null);
  const punks = usePunks();

  useEffect(() => {
    setSelectedPunk(punks[0]);
  }, [punks]);

  return (
    <div className='app'>
      <Header />
      <Main selectedPunk={selectedPunk} />
      <PunkList
        punks={punks}
        setSelectedPunk={setSelectedPunk}
      />
    </div>
    )
}

export default App;
