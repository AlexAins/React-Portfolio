import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
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

