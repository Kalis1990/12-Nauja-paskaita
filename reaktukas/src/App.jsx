import './App.css';
import Text from './Components/008/text';
import Select from './Components/008/select';
import Checkbox from './Components/008/Checkbox';



function App() { //components fukcijos aprasymas

  // const [count, setCount]= useState(0);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Form Controll</h1>
      <Text></Text>
      <Select></Select>
      <Checkbox></Checkbox>
      </header>
    </div>
  );
}

export default App;
