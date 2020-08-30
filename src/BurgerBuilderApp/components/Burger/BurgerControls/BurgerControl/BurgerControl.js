import React from "react";
import classes from './BurgerControl.css';

const burgerControl = (props) => (
    <div className={classes.BurgerControl}>
        <p>{props.label}
            <button disabled={props.disableActions === 0} className={classes.LessButton} onClick={props.ingredientRemoved}> Less </button>
            <button className={classes.MoreButton} onClick={props.ingredientAdded}> More </button>
        </p>
    </div>
);

export default burgerControl;
