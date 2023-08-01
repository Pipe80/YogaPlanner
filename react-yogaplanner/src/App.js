import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Quote from './components/Quote';
import Faq from './components/Faq';
import Settings from './components/Settings';
<<<<<<< HEAD
import Login from "./components/Login";
import Register from "./components/Register"; 
=======
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
>>>>>>> 20c5bab9d01be7e5a41bbf2655a89215d7d1719a

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Frontpage/>
      <Features/>
      <Quote/>
      <Faq/>
      <Settings/>
      <Login/>
      <Register/>
=======
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
>>>>>>> 20c5bab9d01be7e5a41bbf2655a89215d7d1719a
    </div>
  );
};


export default App;
