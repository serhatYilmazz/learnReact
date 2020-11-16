import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Authentication from "./components/Authentication/Authentication";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {

    render() {
        return (

                <Layout>
                    <Switch>
                        <Route path="/signin" component={Authentication} />
                        <Route path="/build" component={BurgerBuilder} />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
