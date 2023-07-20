import React from 'react';

// Components
//import Test from './components/test';
// import Page from './components/app';
import Frontpage from './components/FrontPage';
import Settings from './components/Settings';
// Styles
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle/>
      {/* <Test/> */}
      <Frontpage/>
      <Settings/> 
      {/* <Page/> */}
    </div>
  );
}

export default App;
