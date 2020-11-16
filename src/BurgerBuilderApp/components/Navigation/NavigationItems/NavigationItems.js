import React from "react";
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/signin">Sign In</NavigationItem>
        <NavigationItem link="/build" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/checkout" >Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
