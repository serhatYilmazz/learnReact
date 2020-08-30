import React from "react";
import Aux from '../../hoc/Auxilary';

import layoutCss from './Layout.css';


const layout = (props) => (
    <Aux>
        <div>Toolbar, backdrop</div>
        <main className={layoutCss.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
