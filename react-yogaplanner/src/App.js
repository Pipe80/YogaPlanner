import React from 'react';

// Components
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Quote from './components/Quote';
import Faq from './components/Faq';
import Settings from './components/Settings';
import Login from "./components/Login"; 

function App() {
  return (
    <div>
      <Frontpage/>
      <Features/>
      <Quote/>
      <Faq/>
      <Settings/>
      <Login/>
    </div>
  );
}

export default App;

