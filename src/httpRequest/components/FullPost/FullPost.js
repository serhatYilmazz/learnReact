import React from "react";
import classes from './FullPost.css';

import axios from 'axios';

class FullPost extends React.Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate(nextProps, nextState) {
        if (this.props.postId) {
            if (!this.state.loadedPost || (this.state.loadedPost) && this.state.loadedPost.id !== this.props.postId) {
                axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.postId)
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        });
                    });
            }
        }
    }

    render() {
        let post = <p style={{textAlign: 'center'}}>Please Select a post</p>;
        if (this.state.loadedPost) {
            post = <div className={classes.FullPost}>
                {/*<h1>{props.title}</h1>*/}
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <p>{this.state.loadedPost.author}</p>
                <button>Delete</button>
            </div>;
        }
        return post;
    }
}

export default FullPost;
