// In your App.js or main layout component
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Manager from './components/Manager';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';  
import Features from './pages/Features';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;