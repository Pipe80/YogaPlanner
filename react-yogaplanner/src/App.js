import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './components/FrontPage';
import Login from './components/Login';
import Features from './components/Features';
import Quote from './components/Quote';
import Faq from './components/Faq';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> */}
      <Frontpage />
      <Features />
      <Quote />
      <Faq />
      <Settings />
    </div>
  );
}

export default App;
