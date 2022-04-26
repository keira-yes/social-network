import React from 'react';
import { connect } from "react-redux";
import {addPostCreator, updatePostCreator} from "../../../redux/reducers/postsReducer";
import { Posts } from "./Posts";

const mapStateToProps = (state) => {
    return {
        postsReducer: state.postsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updatePost: (text) => {
            dispatch(updatePostCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
