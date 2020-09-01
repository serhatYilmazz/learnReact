import React, {Component} from "react";
import Aux from '../hoc/Auxilary';
import Burger from '../components/Burger/Burger';
import BurgerControls from '../components/Burger/BurgerControls/BurgerControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updateOrder = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => ingredients[igKey])
            .reduce((accumulator, curr) => accumulator + curr, 0);
        if (sum > 0) {
            this.setState((prevState, props) => {
                return {
                    purchasable: true
                };
            });
        } else {
            this.setState((prevState, props) => {
                return {
                    purchasable: false
                };
            });
        }
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
        this.updateOrder(immIngredients);
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
            this.updateOrder(immIngredients);
        }
    };

    purchaseHandler = () => {
        this.setState((prevState, props) => {
            return {
                purchasing: true
            };
        });
    };

    purchaseCancelHandler = () => {
        this.setState((prevState, props) => {
            return {
                purchasing: false
            };
        });
    };
    purchasedHandler = () => {
        alert('Purchased');
    };

    render() {
        return (
            <Aux>
                <Modal show={this.state.purchasing} clicked={this.purchaseCancelHandler}>
                    <OrderSummary canceled={this.purchaseCancelHandler} purchased={this.purchasedHandler} totalPrice={this.state.totalPrice} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls disableActions={this.state.ingredients}
                                ingredientAdded={this.addIngredientHandler}
                                ingredientRemoved={this.removeIngredient}
                                price={this.state.totalPrice}
                                purchasable={this.state.purchasable}
                                onPurchase={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
