import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
