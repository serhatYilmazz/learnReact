import React from "react";
import {Link, Route} from "react-router-dom";
import Post from '../../components/Posts/Post/Post';

import classes from './Posts.css';
import axios from "../../axios";
import FullPost from "../FullPost/FullPost";

class Posts extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const slicedData = response.data.slice(0, 8);
                const updatedData = slicedData.map(data => {
                    return {
                        ...data,
                        author: 'Serhat'
                    };
                });
                this.setState({
                    posts: updatedData
                })
            });
    }

    postClickHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    };


    render() {
        let posts = this.state.posts.map(post => {
            return (
                <Link to={'/posts/' + post.id} key={post.id} > <Post title={post.title} body={post.body} author={post.author}
                                   clicked={this.postClickHandler.bind(this, post.id)}/>
                </Link>
            );
        });
        return (
            <div className={classes.Posts}>
                {posts}
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;
