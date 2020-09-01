import React from "react";

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    let ingredients = [];
    for (let prop in props.ingredients) {
        for (let i = 0; i < props.ingredients[prop]; i++) {
            ingredients.push(<BurgerIngredient key={prop + i} type={prop}/>);
        }
    }

    const numberOfIngredients = ingredients.reduce((acc, curr) => acc.concat(curr), []);
    if (numberOfIngredients.length === 0) {
           ingredients.push(<p key={'uq'}>Please start adding ingredients.</p>)
    }

    return (<div className={classes.Burger}>
        <BurgerIngredient key={'breadTop'} type={'bread-top'} />
        {ingredients}
        <BurgerIngredient key={'breadBottom'} type={'bread-bottom'} />
    </div> );
};

export default burger;
