import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AdoptableAnimals from './components/AdoptableAnimals';
import CreateListing from './components/CreateListing';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/adoptable" element={<AdoptableAnimals/>}/>
          <Route path="/create" element={<CreateListing/>}/>
        </Routes>
      </Router>
  );
}

export default App;
