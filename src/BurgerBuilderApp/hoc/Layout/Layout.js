import React from "react";
import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import layoutCss from './Layout.css';


class Layout extends React.Component {
    state = {
        isSideDrawerOpen: false
    };

    closeSideDrawerHandler = () => {
        this.setState((prevState, props) => {
            return {
                isSideDrawerOpen: false
            };
        });
    };

    openSideDrawerHandler = () => {
        this.setState((prevState, props) => {
            return {
                isSideDrawerOpen: true
            };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar clickSideDrawer={this.openSideDrawerHandler} showToggleDrawer={!this.state.isSideDrawerOpen} />
                <SideDrawer show={this.state.isSideDrawerOpen} clicked={this.closeSideDrawerHandler} />
                <main className={layoutCss.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;
