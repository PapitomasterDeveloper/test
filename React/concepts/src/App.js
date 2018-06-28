import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - Type of Components</h1>
        </header>
        <p className="App-intro">
          In this mini series, I will do tiny examples of concepts of React like projects, tiny components, this for the purpose of demostrate some concepts for a future Basic React.
        </p>
      </div>
    );
  }
}

export default App;
