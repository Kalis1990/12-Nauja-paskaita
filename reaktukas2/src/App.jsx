import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import AnimalsContext from './Components/AnimalsContext';
import { useEffect, useState } from 'react';
import { create, destroy, read, update } from './Functions/localstorage';
import List from './Components/list';
import Edit from './Components/edit';

const keyLock = 'myFantasticZoo';
const animalsTypes = [
  { id: 1, type: 'Antis' },
  { id: 2, type: 'Avis' },
  { id: 3, type: 'Antilopas' },
  { id: 4, type: 'Bebras' },
  { id: 5, type: 'Briedis' },
  { id: 6, type: 'Barsukas' }
];

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())

  const [modalData, setModalData] = useState(null);
  
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [animals, setAnimals] = useState(null);

  useEffect(() => {
    setAnimals(read(keyLock).sort((a, b) => a.id - b.id));
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLock, createData);
    setLastUpdate(Date.now());
  }, [createData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(keyLock, deleteData);
    setLastUpdate(Date.now());
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(keyLock, editData, editData.id);
    setLastUpdate(Date.now());
  }, [editData]);



  return (
    <AnimalsContext.Provider value={{
      animalsTypes,
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit/>
    </AnimalsContext.Provider>
  );
}

export default App;