import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateListing from './components/CreateListing';
import Read from './components/Read';
import EditListing from './components/EditListing';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="edit/:id" element={<EditListing />} />
      </Routes>
    </Router>
  );
}

export default App;
