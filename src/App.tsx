import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-container">
        <Switch>
          <Route path="/" exact component={Landing} />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
