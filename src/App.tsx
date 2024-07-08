import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactClient from './ContactClient';
import Dashboard from './Dashboard';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen overflow-auto'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<ContactClient/>} />
          <Route path="/contact" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
