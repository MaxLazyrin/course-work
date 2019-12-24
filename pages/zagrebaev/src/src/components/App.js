import React, { Component } from 'react';
import '../styles/App.css';
import EasyLab from './Calc.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Maxim Zagrebaev. IKBO-03-16</h2>
        </div>
        <p className="App-intro">
          <EasyLab></EasyLab>
        </p>
      </div>
    );
  }
}

export default App;
