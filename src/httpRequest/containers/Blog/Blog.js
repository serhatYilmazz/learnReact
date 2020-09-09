import React from "react";
import axios from '../../axios';

import Aux from '../../hoc/Auxilary/Auxilary';
import Posts from '../../components/Posts/Posts';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null
    };

    componentDidMount() {
        axios.get("/posts")
            .then(response => {
                const slicedData = response.data.slice(0, 4);
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
        })
    };

    render() {
        return (
            <Aux>
                <Posts posts={this.state.posts} clicked={this.postClickHandler} />
                <FullPost postId={this.state.selectedPostId} />
                <NewPost />
            </Aux>
        );
    }
}

export default Blog;
