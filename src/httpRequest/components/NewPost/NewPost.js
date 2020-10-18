import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import classes from './NewPost.css';
import axios from '../../axios';

const NewPost = (props) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        author: '',
        submitted: false
    });

    useEffect(() => {
        console.log(props)
    });

    const onClickHandler = () => {
        const data = {
            title: post.title,
            body: post.body,
            author: post.author
        };
        axios.post("/posts", data).then(r => {
            console.log(r);
            // setPost({submitted: true});
            // props.history.push("/posts");
            props.history.replace("/posts");
        });
    };

    let redirected = null;
    if (post.submitted) {
        redirected = <Redirect to="/posts"/>
    }

    return (
        <div className={classes.NewPost}>
            {redirected}
            <form>
                <div>
                    <label>Title</label>
                    <input type="text" value={post.title}
                           onChange={event => setPost({...post, title: event.target.value})}/>
                </div>

                <div>
                    <label>Content</label>
                    <textarea rows="4" value={post.body}
                              onChange={event => setPost({...post, body: event.target.value})}/>
                </div>

                <div>
                    <label>Author</label>
                    <select value={post.author} onChange={event => setPost({...post, author: event.target.value})}>
                        <option value="Serhat">Serhat</option>
                        <option value="Manu">Manu</option>
                    </select>
                </div>
                <button type="button" onClick={onClickHandler}>Add</button>
            </form>
        </div>
    );
};

export default NewPost;
