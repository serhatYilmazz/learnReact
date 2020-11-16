import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../../UI/Button/Button";

import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>Well Well</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div>
                <Button btnType="Success" clicked>Continue</Button>
                <Button btnType="Danger" clicked>Cancel</Button>
            </div>
        </div>
    );
};

export default checkoutSummary;
