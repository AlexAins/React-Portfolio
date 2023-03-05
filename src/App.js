import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes basename="react-portfolio">
          <Route path="/react-portfolio" element={<Home />} />
          <Route path="/react-portfolio/projects" element={<Projects />} />
          <Route path="/react-portfolio/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

