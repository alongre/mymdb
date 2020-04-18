import React from 'react';
import Home from './components/Home';
import GlobalStyle from './components/styled/global.styled';
import ErrorBoundry from './ErrorBoundry';

const App = () => {
  return (
    <div>
      <GlobalStyle />
        <Home />
    </div>
  );
};

export default App;
