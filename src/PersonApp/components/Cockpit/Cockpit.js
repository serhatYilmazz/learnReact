import React from "react";

import cockpitClasses from './Cockpit.css';
import Sero from '../../hoc/Sero';

const cockpit = (props) => {
    const classes = [];
    let btnClass = cockpitClasses.Button;

    if (props.showPersons) {
        btnClass = [cockpitClasses.Button, cockpitClasses.red].join(' ');
    }
    if (props.persons.length <= 2) {
        classes.push(cockpitClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cockpitClasses.bold);
    }
    return (
        <Sero>
            <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
            <button className={btnClass} onClick={props.togglePersons}>Toggle Persons</button>
        </Sero>
    );
};

export default cockpit;
