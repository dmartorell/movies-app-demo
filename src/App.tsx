import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import configureStore from './redux/store';
import Landing from './components/Landing';
import MovieDetail from './components/MovieDetail';
import TvDetail from './components/TvDetail';
import NotFound from './components/NotFound';

import './App.scss';

function App() {
  return (
    <Provider store={configureStore({ popularMovies: String, popularTvShows: String })}>
      <BrowserRouter>
        <Navbar />
        <main className="main-container">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/movie/:movieId" component={MovieDetail} />
            <Route path="/tv/:tvId" component={TvDetail} />

            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
