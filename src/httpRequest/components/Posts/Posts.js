import React from "react";
import Post from '../../components/Posts/Post/Post';

import classes from './Posts.css';

const posts = (props) => {
    const posts = props.posts.map(post => {
        return (
            <Post key={post.id} title={post.title} body={post.body} author={post.author} clicked={props.clicked.bind(this, post.id)}/>
        );
    });

    return (
        <div className={classes.Posts}>
            {posts}
        </div>
    );
};

export default posts;
