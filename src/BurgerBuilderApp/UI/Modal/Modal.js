import React from "react";
import Aux from '../../hoc/Auxilary';

import classes from './Modal.css';

const modal = (props) => {
    const showStyle = {
        'transform': props.show ? 'translateY(0)' : 'translateY(-100vh)',
        'opacity': props.show ? '1' : '0'
    };
    return (
        <Aux>
            <div style={showStyle} className={classes.Modal}>
                {props.children}
            </div>
            <div style={showStyle} className={classes.Mask} onClick={props.clicked}></div>
        </Aux>
    );
};

export default modal;
