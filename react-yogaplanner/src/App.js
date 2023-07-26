import React from 'react';
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Quote from './components/Quote';
import Settings from './components/Settings';
import Login from "./components/Login"; 

function App() {
  return (
    <div>
      <Frontpage />
      <Features />
      <Quote />
      <Settings /> 
      <Login />
    </div>
  );
}

export default App;

