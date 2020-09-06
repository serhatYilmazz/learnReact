import React from "react";
import Aux from '../../../../hoc/Auxilary/Auxilary';

import classes from './ToggleButton.css';

const toggleButton = (props) => (
    <Aux>
        {props.show ? <div onClick={props.clicked} className={classes.ToggleButton}>
            <div className={classes.reg}></div>
            <div className={classes.reg}></div>
            <div className={classes.reg}></div>
        </div> : null}
    </Aux>
);

export default toggleButton;
