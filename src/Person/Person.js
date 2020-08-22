import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm {props.age} years old.</p>
            <input value={props.name} onChange={props.changed} />
            <button type="button" onClick={props.myEvent}>Delete</button>
        </div>
    );
};

export default person;
