import React, { Component } from 'react';
import Header from './Header.js';
import FamousPerson from './FamousPerson';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <FamousPerson />
        </header>
      </div>
    );
  }
}

export default App;
