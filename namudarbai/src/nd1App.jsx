import './App.css';
import H1 from './Components/h1';
import Zuikis from './Components/zuikis';
import Zebra from './Components/zebrairbebra';
import random from './Funcions/rand';
import Nd4 from './Components/nd4';
import Nd5 from './Components/nd5';
import Nd6 from './Components/nd6';
import Nd7 from './Components/nd7';
// import Kn from './Components/Kn';

const color = 'pink';
const ms = {color: color};
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
// const gyvunai = ["Zebrai ir Bebrai"]
// const mas = ['Pilkis', 'Murkis', 'Gagarinas'];

function App() { //components fukcijos aprasymas
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis manoStlius={ms}></Zuikis>  
        <H1 name></H1>
        <Zebra spalva={random(1, 2)}></Zebra>
        <Nd4 spalva={random(1, 2)}></Nd4>
        <Nd5 spalva riemas fonas></Nd5>
        <div>
        {dogs.map((n, i) => <Nd6 key={i} dogs={n}></Nd6>)}
        </div>
        <div>
        {[...dogs].sort((a,b)=>b.length - a.length).map((n, i) => <Nd7 key={i} dogs={n}></Nd7>)}
        </div>
      </header>
    </div>
  );
}

export default App;

        
