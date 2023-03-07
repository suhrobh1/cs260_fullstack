import logo from './logo.svg';
import './App.css';
import items from './data/items';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import RegistrationPage from './pages/RegistrationPage';
import Navigation from './components/Navigation';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/order" element={ <OrderPage items = {items}/>}></Route>
            <Route path="/register" element={ <RegistrationPage />}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
