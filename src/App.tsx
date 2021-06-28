import React from 'react';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Movie Chair</h1>
      <Button className="cta-btn" onClick={() => console.log('pressed!')}>TV SHOWS</Button>
      <Button className="cta-btn" onClick={() => console.log('pressed!')}>MOVIES</Button>
    </div>
  );
}

export default App;
