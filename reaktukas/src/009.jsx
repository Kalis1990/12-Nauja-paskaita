import { useState } from 'react';
import { useRef } from 'react';
import './App.css';
import M1 from './Components/009/M1';
// import PirmasisKontekstas, {KitasKontekstas, DarKontekstas} from './Contexts/PirmasisKontekstas';
import PirmasisKontekstas, {DarKontekstas} from './Contexts/PirmasisKontekstas';

function App() { //components fukcijos aprasymas

  const[count, setCount] = useState(0);

  const blaSuper = useRef(5);
  const good = useRef();
  let bla = 5;

  const doCount = ()=> {
    // const my = document.querySelector('button');nera gerai taip daryti
    const my = good.current;
    console.log(my);
    setCount(c => c + 1);
    bla++;
    console.log(bla);

    blaSuper.current++
    console.log(blaSuper.current)
  }

  // const [count, setCount]= useState(0);
  return (
    <DarKontekstas.Provider value={{dar: 10000 }}>
    <PirmasisKontekstas.Provider value={{
      pirmas:'Valio',
      spalva:'Pink'
    }}>
    <div className="App">
      <header className="App-header">
        <h1>UseContext & useRef {count}</h1>
        <M1 kas="Penki"></M1>
        <button ref={good} onClick= {doCount} > +1</button>
      </header>
    </div>
    </PirmasisKontekstas.Provider>
    </DarKontekstas.Provider>
  );
}

export default App;
