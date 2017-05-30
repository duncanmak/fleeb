import * as React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Home, Foo, Bar } from './Components';

import './App.css';

const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  /*  
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
          <h1>Hello</h1>
        </div>
      );
    }
  
  */

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
            <p><Link to="/foo">Foo</Link></p>
            <p><Link to="/bar">Bar</Link></p>
          </div>
          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/foo" component={Foo} />
          <Route path="/bar" component={Bar} />
        </div>
      </Router>);
  }
}

export default App;
