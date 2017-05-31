import * as React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Gists } from './Gists';

import './App.css';

const logo = require('./logo.svg');

const Home = () => <div><h2>Home</h2></div>;

class App extends React.Component<{}, null> {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/gists">Gists</Link></p>
          </div>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/gists" component={Gists} />
        </div>
      </Router>);
  }
}

export default App;
