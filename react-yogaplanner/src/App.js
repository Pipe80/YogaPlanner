import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Quote from './components/Quote';
import Faq from './components/Faq';
import Settings from './components/Settings';
import Login from "./components/Login"; 
import SignIn from "./components/SignIn"; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Frontpage />
        <Features />
        <Quote />
        <Faq />
        {/* <Settings />
        <SignIn/> */}
      </Router>
    </div>
  );
}

export default App;
