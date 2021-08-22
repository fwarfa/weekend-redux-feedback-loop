import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Feeling from './Feeling';
import Understanding from './Understanding';
import Supported from './Supported';
import Comments from './Comments';
import Review from './Review';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/1">
          <Feeling />
        </Route>
        <Route path="/2">
          <Understanding />
        </Route>
        <Route path="/3">
          <Supported />
        </Route>
        <Route path="/4">
          <Comments />
        </Route>
        <Route path="/5">
          <Review />
        </Route>
      </Router>
    </div>
  );
}

export default App;
