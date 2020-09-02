import React from "react";
import Aux from '../../hoc/Auxilary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import layoutCss from './Layout.css';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={layoutCss.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
