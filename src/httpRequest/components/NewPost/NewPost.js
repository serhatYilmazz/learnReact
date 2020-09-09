import React, {useState} from "react";
import classes from './NewPost.css';
import axios from '../../axios';

const NewPost = (props) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        author: ''
    });

    const onClickHandler = () => {
        const data = {
            title: post.title,
            body: post.body,
            author: post.author
        };
        axios.post("/posts", data).then(r => console.log(r));
    };

    return (
        <div className={classes.NewPost}>
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
                s

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
