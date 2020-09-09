import React, {useState, useEffect} from "react";
import classes from './FullPost.css';

import axios from '../../axios';

const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState(null);

    useEffect(() => {
        if (props.postId) {
            if (!loadedPost || (loadedPost) && loadedPost.id !== props.postId) {
                axios.get("/posts/" + props.postId)
                    .then(response => {
                        setLoadedPost(response.data);
                    });
            }
        }
    });

    let post = <p style={{textAlign: 'center'}}>Please Select a post</p>;
    if (loadedPost) {
        post = <div className={classes.FullPost}>
            {/*<h1>{props.title}</h1>*/}
            <h1>{loadedPost.title}</h1>
            <p>{loadedPost.body}</p>
            <p>{loadedPost.author}</p>
            <button>Delete</button>
        </div>;
    }
    return post;

};

export default FullPost;
