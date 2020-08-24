import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
        this.state = {
            persons: [
                {"id": "asd123", "name": "React", "age": 5},
                {"id": "bcd3214", "name": "Angular", "age": 6},
                {"id": "fghrwt31", "name": "Vue", "age": 4}
            ],
            otherState: 'some other value',
            showPersons: false
        };
    }

    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount');
    }

    render() {
        console.log('[Persons.js] Inside render');
        return this.props.persons.map((person, index) => {
            return <Person key={person.id}
                           myEvent={() => this.props.clicked(index)}
                           name={person.name}
                           age={person.age}
                           changed={(event) => this.props.changed(event, person.id)}
            />
        });
    }
}

export default Persons;

