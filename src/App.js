import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/"/>
          <Route path="/add" element={<h1>Read Component</h1>}/>
          <Route path="/read" element={<h1>Read Component</h1>}/>
          <Route path="/update" element={<h1>Read Component</h1>}/>
        </Routes>
      </Router>
  );
}

export default App;
