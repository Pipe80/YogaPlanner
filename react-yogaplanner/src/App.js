import React from 'react';

// Components
//import Test from './components/test';
// import Page from './components/app';
import Frontpage from './components/FrontPage';
import Features from './components/Features';
import Settings from './components/Settings';
// Styles

function App() {
  return (
    <div>
      {/* <Test/> */}
      <Frontpage/>
      <Features/>
      <Settings/> 
      {/* <Page/> */}
    </div>
  );
}

export default App;
