import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CreateListing from './components/CreateListing';
import Read from './components/Read';
import EditListing from './components/EditListing';
import AnimalDetail from './components/AnimalDetail';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<CreateListing />} />
          <Route path="/edit/:id" element={<EditListing />} />
          <Route path="/animal/:id" element={<AnimalDetail />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
