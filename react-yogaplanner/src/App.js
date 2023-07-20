import React from 'react';

// Components
//import Test from './components/test';
// import Page from './components/app';
import Frontpage from './components/FrontPage';

// Styles
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <GlobalStyle/>
      {/* <Test/> */}
      <Frontpage/>
      {/* <Page/> */}
    </div>
  );
}

export default App;
