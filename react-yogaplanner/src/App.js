import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Quote from './components/Quote';
import Faq from './components/Faq';
import Settings from './components/Settings';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Frontpage />
              <Features />
              <Quote />
              <Faq />
            </>
          } />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </div>
  );
};


export default App;
