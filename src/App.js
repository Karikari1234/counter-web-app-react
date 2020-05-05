import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max" },
      { name: "Will" },
      { name: "Billie" },
      { name: "Gill" }
    ],
    showPersons: false
  };

  buttonClickHandler = () => {
    const defBool = this.state.showPersons;
    //console.log("Hi there");
    this.setState({
     
      persons: [
        { name: "Maximdasda" },
        { name: "Will" },
        { name: "Billie" },
        { name: "Gill" }
      ],
      showPersons: !defBool
    });
  };

  inputNameHandler = event => {
    this.setState({
      persons: [
        { name: "Maximdasda" },
        { name: event.target.value },
        { name: "Billie" },
        { name: "Gill" }
      ],
      
    });
  };
  render() {
    return (
      <div className="App">
        <h1> Hi, I am a react app</h1>
        <button onClick={this.buttonClickHandler}>Toggle!</button>
        <p>It is working!</p>
        { this.state.showPersons ?
            <div>
            <Person
              name={this.state.persons[0].name}
              changed={this.inputNameHandler}
            />
            <Person name={this.state.persons[1].name} />
            <Person name={this.state.persons[2].name}>YO YO ! I am Hashem</Person>
            <Person name={this.state.persons[3].name} />
            </div> : null
        } 
        
      </div>
    );
  }
}

export default App;
