import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import configureStore from './redux/store';
import Landing from './components/Landing';
import Detail from './components/Detail';
import NotFound from './components/NotFound';
import './App.scss';

function App() {
  return (
    <Provider store={configureStore({ popularMovies: String, popularTvShows: String })}>
      <BrowserRouter>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/movie" component={Landing} />
            <Route exact path="/movie/:id" component={Detail} />
            <Route exact path="/" component={Landing}>
              <Redirect to="/movie" />
            </Route>
            <Route exact path="/tv/:id" component={Detail} />
            <Route exact path="/tv/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
