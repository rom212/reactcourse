import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';




class App extends Component {

  state = {
    persons: [
      {id: 0, name: "romano" , age: 38},
      {id: 1, name: "mateo" , age: 39}
    ]
  }

  switchHandler = (incr) => {
    
    let newPerson = []
    this.state.persons.forEach((k)=>{
      if (k.name === "mateo") {
        newPerson.push({id: k.id, name: k.name, age: k.age+incr});
      } else{
        newPerson.push({id: k.id, name: k.name, age: k.age});
      }
    })
    this.setState({persons: newPerson})
  }


  nameChange = (event , id) => {
    // console.log(event);
    // console.log(this.state);
    let tempPersonState = [...this.state.persons];
    //console.log(tempPersonState);
    let newPersonState = []; 
    tempPersonState.forEach(pers => {
      if(pers.id === id){
        newPersonState.push({id: pers.id, name: event.target.value , age: pers.age});
      } else {
        newPersonState.push({id: pers.id, name: pers.name , age: pers.age});
      }
    })
    console.log("state",this.state)
    console.log("temp" , newPersonState)
    this.setState({persons:newPersonState})
  }


  render() {
    return (
      <div className="App">
        <h1>Hi I am a React app</h1>
        <button 
          style={{cursor:"pointer",border:"1px solid blue"}}
          onClick={()=>this.switchHandler(10)}>
            Add years
        </button>
        <div>
          {this.state.persons.map(pers => {
              return <Person 
                name={pers.name} 
                age={pers.age}
                key={pers.id}
                click={()=>this.switchHandler(5)}
                nameChange={(event) => this.nameChange(event,pers.id)}
                > What'sup ?</Person>;
            })
          }
        </div>
      </div>
    );
  }
}


export default App;
