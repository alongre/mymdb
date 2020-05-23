import React from 'react';
import Home from './components/Home';
import ErrorBoundary from './ErrorBoundary';
import GlobalStyle from './components/styled/global.styled';
import {Router, RouteComponentProps} from '@reach/router';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Header from './components/elements/Header';

const App = () => {
  return (
    <div>
      <GlobalStyle />

      <ErrorBoundary>
        <Header />
        <Router>
          <Home path="/" />
          <Movie path="/:movieId" />
          <NotFound default />
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
