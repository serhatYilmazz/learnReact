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
        <p>Burger Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => <BurgerControl key={control.label}
                                                label={control.label}
                                                ingredientAdded={props.ingredientAdded.bind(this, control.type)}
                                                ingredientRemoved={props.ingredientRemoved.bind(this, control.type)}
                                                disableActions={props.disableActions[control.type]}
        />)}
        <button className={classes.OrderButton} onClick={props.onPurchase} disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default burgerControls;
