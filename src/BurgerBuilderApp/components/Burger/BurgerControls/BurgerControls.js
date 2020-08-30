import React from "react";

import BurgerControl from './BurgerControl/BurgerControl';

import classes from './BurgerControls.css';

const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
];

const burgerControls = (props) => (
    <div className={classes.BurgerControls}>
        {controls.map(control => <BurgerControl key={control.label}
                                                label={control.label}
                                                ingredientAdded={props.ingredientAdded.bind(this, control.type)}
                                                ingredientRemoved={props.ingredientRemoved.bind(this, control.type)}
                                                disableActions={props.disableActions[control.type]}
        />)}
    </div>
);

export default burgerControls;
