import React from "react";
import Aux from '../../../hoc/Auxilary';

import Button from '../../../UI/Button/Button';

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map(ingKey => {
        return (
            <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.purchased} btnType='Success'>Continue</Button>
            <Button clicked={props.canceled} btnType='Danger'>Cancel</Button>
        </Aux>
    )
};

export default orderSummary;
