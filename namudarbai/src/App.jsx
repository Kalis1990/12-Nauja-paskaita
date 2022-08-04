import './App.css';
import { useState } from 'react';
import randColor from './Funcions/randColor';
import Fun from './Components/nd2/Fun';
import Sad from './Components/nd2/Sad';


function App() { //components fukcijos aprasymas

  // const [count, setCount]= useState(0);
  const [kv, setKv]= useState([]);
  
  const kvPressed=()=>{
    setKv(k => [...k, randColor()]);
    console.log('ja ja 1')
  }
    <>

    </>
  return (
    <div className="App">
      <header className="App-header">   
      <button onClick={() => setKv(k => [...k, randColor()])}>Prideti</button>
      <div className='kv-bin'>
          <div class="circle">

          </div>
          {
            kv.map((c, i)=><div className='kv' style={{
              backgroundColor:c +'69,',
              borderColor:c
              }} key={i}></div>)
            }
            
            </div>
        <div className='ratukas'>
            
        </div>
      </header>
    </div>
  );
}

export default App;
