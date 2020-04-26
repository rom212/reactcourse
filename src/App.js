import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      {name: "romano" , age: 38},
      {name: "mateo" , age: 39}
    ]
  }

  switchHandler = (incr) => {
    
    let newPerson = []
    this.state.persons.forEach((k)=>{
      if (k.name === "mateo") {
        newPerson.push({name: k.name, age: k.age+incr});
      } else{
        newPerson.push({name: k.name, age: k.age});
      }
    })
    this.setState({persons: newPerson})
  }


  nameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      persons: [
        {name: "romano" , age: 38},
        {name: event.target.value , age: 39}
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hi I am a React app</h1>
        <button onClick={()=>this.switchHandler(10)}>Add years</button>
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}
            > What'sup ?</Person>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={()=>this.switchHandler(5)}
            nameChange={this.nameChange}
            > What'sup ?</Person>
        </div>

      </div>
    );
  }
}


export default App;
