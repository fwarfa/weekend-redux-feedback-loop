import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feeling from './Feeling';
import Understanding from './Understanding';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/">
          <Feeling />
        </Route>
        <Route path="/1">
          <Understanding />
        </Route>
      </Router>
    </div>
  );
}

export default App;
