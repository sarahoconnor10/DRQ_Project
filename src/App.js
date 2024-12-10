import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AdoptableAnimals from './components/AdoptableAnimals';
import CreateListing from './components/CreateListing';
import Read from './components/Read';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/adoptable" element={<Read/>}/>
          <Route path="/create" element={<CreateListing/>}/>
        </Routes>
      </Router>
  );
}

export default App;
