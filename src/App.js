import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {"name": "React", "age": 5},
            {"name": "Angular", "age": 6},
            {"name": "Vue", "age": 4}
        ],
      otherState: 'some other value'
    };

    switchNameHandler = () => {
      this.setState({
        persons: [
          {"name": "React-DOM", "age": 5.5555},
          {"name": "Angular", "age": 6.77},
          {"name": "Vue", "age": 4.66}
        ]
      });
    };

    render() {
        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button onClick={this.switchNameHandler}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
}

export default App;
