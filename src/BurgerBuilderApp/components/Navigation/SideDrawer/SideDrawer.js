import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary/Auxilary';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    let sdClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        sdClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={sdClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
                <Backdrop/>
            </div>
        </Aux>
    );
};

export default sideDrawer;
