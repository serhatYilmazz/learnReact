import React from "react";

import cockpitClasses from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = cockpitClasses.red;
    }
    if (props.persons.length <= 2) {
        classes.push(cockpitClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cockpitClasses.bold);
    }
    return (
        <div>
            <h1 className={classes.join(' ')}> Hi I'm a react app </h1>
            <button className={btnClass} onClick={props.togglePersons}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;
