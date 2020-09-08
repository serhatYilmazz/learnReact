import React from "react";
import classes from './NewPost.css';

const newPost = (props) => {
    return (
        <div className={classes.NewPost}>
            <form>
                <div>
                    <label>Title</label>
                    <input/>
                </div>

                <div>
                    <label>Content</label>
                    <textarea />
                </div>

                <div>
                    <label>Author</label>
                    <select>
                        <option>Serhat</option>
                    </select>
                </div>
                <button>Add</button>
            </form>
        </div>
    );
};

export default newPost;
