import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Projects/Portfolio';
import 'bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div id="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

