import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import configureStore from './redux/store';
import HeroSection from './components/HeroSection';
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
            <Route exact path="/" component={HeroSection} />
            <Route exact path="/movie/:id" component={Detail} />
            <Route exact path="/tv/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
