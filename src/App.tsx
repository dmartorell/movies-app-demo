import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import NotFound from './components/NotFound';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore({ type: String })}>
      <BrowserRouter>
        <Navbar />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
