import './App.css';
import { useState } from 'react';
import randColor from './Funcions/randColor';
import Kv from './Components/007/Kv';
// import Count from './Components/007/Count';
import ForeverYoung from './Components/007/ForeverYoung';
import {useEffect} from 'react';


function App() { //components fukcijos aprasymas

  // const [count, setCount]= useState(0);
  const [kv, setKv]= useState([]);

  const kvPressed=()=>{
    setKv(k => [...k, randColor()]);
    console.log('ja ja 1')
  }
  useEffect(()=>{
    if(kv.length===0){
      return;
    }
        console.log('Ja Ja 2')
    },[kv]);

  return (
    <div className="App">
      <header className="App-header">
      <h1 onClick=/*{() => setKv(k => [...k, randColor()])}*/{kvPressed}>State</h1>
        <div className='kv-bin'>
        {
         kv? kv.map((c, i)=> <Kv key={i} c={c} i={i}></Kv>) : null
        }
        </div>
        <ForeverYoung start={0}></ForeverYoung>

        {/* <Count start={127}></Count> */}
      </header>
    </div>
  );
}

export default App;
