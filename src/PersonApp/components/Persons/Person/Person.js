import React, {Component} from "react";
import classes from './Person.css';

import withClass from '../../../hoc/WithClass';
import Sero from '../../../hoc/Sero';
import PropTypes from 'prop-types';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
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
        console.log('[Person.js] Inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.position === 0) {
            this.someElement.focus();
        }
    }

    render() {
        console.log('[Person.js] Inside render');
        return (
            <Sero className={classes.Person}>
                <p>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <input ref={(inp) => {
                    this.someElement = inp;
                }}
                       value={this.props.name} onChange={this.props.changed}/>
                <button type="button" onClick={this.props.myEvent}>Delete</button>
            </Sero>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
