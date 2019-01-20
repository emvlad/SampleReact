import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import photom from './photos/images24.jpg'

import Login from '../src/components/login'

import './Sheets/styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <img src={photom} className="jlo-logo" alt="jlogo" />

          <img src={require('./photos/jChrisAple.jpg')} className="App-logo" alt="jlogo" width="140"  />


          <p className="pixColor" >
            Welcome to my space
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >JloMeChris</a>

          <div > 
            <Login/>

          </div>
        </header>
        
      </div>
    );
  }
}

export default App;
