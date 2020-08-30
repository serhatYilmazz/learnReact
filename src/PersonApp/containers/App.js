import React, {Component} from 'react';
import appClasses from './App.css';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from '../hoc/WithClass';

import Sero from '../hoc/Sero';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props);
        this.state = {
            persons: [
                {"id": "asd123", "name": "React", "age": 5},
                {"id": "bcd3214", "name": "Angular", "age": 6},
                {"id": "fghrwt31", "name": "Vue", "age": 4}
            ],
            otherState: 'some other value',
            showPersons: false,
            toggleClicked: 0
        };
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidUpdate()')
    }

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
        this.setState((prevState, props) => {
            return {
                showPersons: !current,
                toggleClicked: prevState.toggleClicked + 1
            };
        });
    };

    deletePersonHandler = (index) => {
        const persons = this.state.persons;
        persons.splice(index, 1);
        this.setState({
            persons: persons
        })
    };

    render() {
        console.log('[App.js] Inside render()');
        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedEventHandler}/>
        }
        return (
            <Sero className={appClasses.App}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    togglePersons={this.togglePersons}
                />
                {persons}
            </Sero>
        );
    }
}

export default withClass(App, appClasses.App);
