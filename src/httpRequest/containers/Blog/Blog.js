import React from "react";
import {NavLink, Route, Switch, withRouter} from 'react-router-dom';
import Posts from '../../components/Posts/Posts';

import classes from './Blog.css';
import asyncComponent from "../../hoc/asynccomponent/AsyncComponent";

const AsyncNewPost = asyncComponent(() => {
    return import("../../components/NewPost/NewPost");
});

class Blog extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className={classes.Blog}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact activeClassName={classes.active}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: this.props.match.url + 'new-post',
                                hash: '#submit',
                                search: "?quickSubmit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" exact component={AsyncNewPost}/>
                    <Route path="/posts" component={Posts}/>
                    {/*<Redirect from="/" to="/posts" />*/}
                    <Route render={() => <h1>Not Found</h1>}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);
