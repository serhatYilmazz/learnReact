import React from "react";
import {BrowserRouter} from "react-router-dom";

import Blog from './containers/Blog/Blog';

const app = (props) => (
    <BrowserRouter basename="/my-app">
        <Blog />
    </BrowserRouter>
);

export default app;
