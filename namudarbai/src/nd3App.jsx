import './App.css';
import Animals from './Components/nd3/animals';
import Select from './Components/nd3/select';
import Checkbox from './Components/nd3/Checkbox';
import Radio from './Components/nd3/Radio';



function App() { //components fukcijos aprasymas

  // const [count, setCount]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Mini localStorage CRUD</h1>
      <Animals></Animals>
      {/* <Select></Select>
      <Checkbox></Checkbox>
      <Radio></Radio> */}
      </header>
    </div>
  );
}

export default App;
