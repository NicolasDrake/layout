import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from './componentes/pages/Home'
import Empresa from './componentes/pages/Empresa.jsx'
import Contato from './componentes/pages/Contato.jsx';

import Navbar from './componentes/Layout/Navbar.jsx';

function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/home" element={<><Navbar /><Home /></>} />
        <Route path="/empresa" element={<><Navbar /><Empresa /></>}/>
        <Route path="/Contato" element={<><Navbar /><Contato /></>}/>

      </Routes>
    </Router>
  )
}

export default App
