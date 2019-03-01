import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Work from './containers/Work';
import About from './containers/About';
import Project from './containers/Project';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Work} />
          <Route path="/projects/:name" component={Project} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;