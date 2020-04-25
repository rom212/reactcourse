import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am a React app</h1>
        <Person name="Roman0" age="39"> What'sup ?</Person>
        <Person name="Matt" age="40"> What'sup ?</Person>
      </div>
    );
  }
}


export default App;
