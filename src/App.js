import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi I am a React app</h1>
      <Person name="Roman" age="39"/>
    </div>
  );
}

export default App;
