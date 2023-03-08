import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Projects/Portfolio';
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/projects" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

