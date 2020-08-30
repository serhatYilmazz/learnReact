import React, {Component} from "react";
import Aux from '../hoc/Auxilary';
import Burger from '../components/Burger/Burger';
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const immIngredients = {...this.state.ingredients};
        immIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState((prevState, props) => {
            return {
                totalPrice: newPrice,
                ingredients: immIngredients
            }
        });
    };

    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const newCount = oldCount - 1;
            const immIngredients = {...this.state.ingredients};
            immIngredients[type] = newCount;
            const newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState((prevState, props) => {
                return {
                    totalPrice: newTotalPrice,
                    ingredients: immIngredients
                };
            });
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls disableActions={this.state.ingredients} ingredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredient}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;
