import React from "react";
import classes from './Post.css';

const post = (props) => {
    return (
        <div className={classes.Post} onClick={props.clicked}>
            <h2>{props.title}</h2>
            {/*<p>{props.body}</p>*/}
            <p>{props.author}</p>
        </div>
    );
};

export default post;
