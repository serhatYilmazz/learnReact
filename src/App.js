import React, {Component} from 'react';
import appClasses from './App.css';

import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {"id": "asd123", "name": "React", "age": 5},
            {"id": "bcd3214", "name": "Angular", "age": 6},
            {"id": "fghrwt31", "name": "Vue", "age": 4}
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {"name": newName, "age": 5.5555},
                {"name": "Angularrr", "age": 6.77},
                {"name": "Vue", "age": 4.66}
            ]
        });
    };

    nameChangedEventHandler = (event, id) => {
        let personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    togglePersons = () => {
        const current = this.state.showPersons;
        this.setState({
            showPersons: !current
        })
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })
    };

    render() {
        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {
                        this.state.persons.map((person, index) => {
                            return <Person key={person.id}
                                           myEvent={this.deletePersonHandler.bind(this, index)}
                                           name={person.name}
                                           age={person.age}
                                           changed={(event) => this.nameChangedEventHandler(event, person.id)}
                            />
                        })
                    }
                </div>
            );

            btnClass = appClasses.red;
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(appClasses.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(appClasses.bold);
        }

        return (
            <div className={appClasses.App}>
                <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
                <button className={btnClass} onClick={this.togglePersons}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;
