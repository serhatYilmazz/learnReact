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

    switchNameHandler = (newName) => {
      this.setState({
        persons: [
          {"name": newName, "age": 5.5555},
          {"name": "Angular", "age": 6.77},
          {"name": "Vue", "age": 4.66}
        ]
      });
    };

    nameChangedEventHandler = (event) => {
        this.setState({
            persons: [
                {"name": 'React-DOM', "age": 5.5555},
                {"name": event.target.value, "age": 6.77},
                {"name": "Vue", "age": 4.66}
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return (<div className="App">
            <h1> Hi I'm a react app </h1>
            <button style={style} onClick={() => this.switchNameHandler('React-vers32')}>Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name}
                    myEvent={this.switchNameHandler.bind(this, 'React-vers2')}
                    age={this.state.persons[1].age}
                    changed={this.nameChangedEventHandler}>My Hobbies: Playing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div>)
    }
}

export default App;
