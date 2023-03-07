import './App.css';
// import items from './data/items';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/add_exercise" element={ <AddExercisePage />}></Route>
            <Route path="/edit_exercise" element={ <EditExercisePage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
