import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
