import './App.css';
import Kosmosas from './Components/005/Kosmosas';
import Kn from './Components/005/Kn';

const yel = 'yellow';
const ms = {color: yel, backgroundColor: 'skyblue'};
const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

function App() { //components fukcijos aprasymas
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>
        {
          // mas.map((n, i) => <h2 key={i}>{n}</h2>)
          mas.map((n, i) => <Kn key={i} name={n}></Kn>)
        }
        <Kosmosas spalva = {yel} krastas='70px' manoStlius={ms}></Kosmosas>
        
      </header>
    </div>
  );
}

export default App;
