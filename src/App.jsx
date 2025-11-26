import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Empresa from './components/pages/Empresa.jsx';
import Contato from './components/pages/Contato.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;