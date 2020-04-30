import React from 'react';
import Home from './components/Home';
import GlobalStyle from './components/styled/global.styled';

const App = () => {
  return (
    <div>
      <GlobalStyle />
        <Home />
    </div>
  );
};

export default App;
