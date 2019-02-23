import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import ProjectCard from './components/ProjectCard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <ProjectCard 
          imgUrl="https://cdn.petcarerx.com/LPPE/images/articlethumbs/Cat-Scratch-Fever-Small.jpg" 
          name="name" 
          description="desc" 
        />
      </div>
    );
  }
}

export default App;
