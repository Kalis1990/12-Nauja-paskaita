import './App.css';
import { useState } from 'react';
import randColor from './Funcions/randColor';
import Fun from './Components/006/Fun';
import Sad from './Components/006/Sad';


function App() { //components fukcijos aprasymas

  // const [count, setCount]= useState(0);
  const [kv, setKv]= useState([]);

  return (
    <div className="App">
      <header className="App-header">
      <h1 onClick={() => setKv(k => [...k, randColor()])}>State</h1>
        {/* <Fun spalva ="pink" setCount={setCount}></Fun>
        <Sad count ={count}></Sad> */}
        <div className='kv-bin'>
        {
          kv.map((c, i)=><div className='kv' style={{
            backgroundColor:c +'69,',
            borderColor:c
          }} key={i}></div>)
        }
        </div>
      </header>
    </div>
  );
}

export default App;
