import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<h1>home</h1>}/>
          <Route path="/adoptable" element={<h1>adoptable animals</h1>}/>
          <Route path="/create" element={<h1>create listing</h1>}/>
        </Routes>
      </Router>
  );
}

export default App;
