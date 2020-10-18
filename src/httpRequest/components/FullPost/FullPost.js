import React, {useEffect, useState} from "react";
import classes from './FullPost.css';

import axios from '../../axios';

const FullPost = (props) => {
    const [loadedPost, setLoadedPost] = useState({
        title: '',
        author: '',
        body: '',
        id: -1
    });

    useEffect(() => {
        if (!loadedPost || (loadedPost) && loadedPost.id !== parseInt(props.match.params.id)) {
            axios.get("/posts/" + props.match.params.id)
                .then(response => {
                    setLoadedPost({
                        ...response.data,
                        id: Number(props.match.params.id)
                    });
                });
        }
    });

    return <div className={classes.FullPost}>
        <h1>{loadedPost.title}</h1>
        <p>{loadedPost.body}</p>
        <p>{loadedPost.author}</p>
        <button>Delete</button>
    </div>;

};

export default FullPost;
