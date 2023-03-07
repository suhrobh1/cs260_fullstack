import './App.css';
// import items from './data/items';
import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';


function App() {
    const [exerciseToEdit, setExerciseToEdit] = useState
    
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercise(data)
    }
    
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage exerciseToEdit={exerciseToEdit} setExerciseToEdit={setExerciseToEdit}  />}></Route>
            <Route path="/add_exercise" element={ <AddExercisePage />}></Route>
            <Route path="/edit_exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
