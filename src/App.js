import './App.css';

import Header from './components/Header';
import CollectionCard from './components/CollectionCard';

import ExamplePunk from './assets/owner/5.jpg'

function App() {
  return (
    <div className='app'>
      <Header />
      <CollectionCard id={0} name={'Bandana Punk'} traits={[{'value': 7}]} image={ExamplePunk} />
    </div>
    )
}

export default App;
