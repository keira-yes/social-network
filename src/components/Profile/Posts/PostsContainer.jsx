import React from 'react';
import { Posts } from "./Posts";
import { addPostCreator, updatePostCreator } from "../../../redux/reducers/postsReducer";

export const PostsContainer = ({ posts, newPostText, dispatch }) => {

    const addPost = () => {
        dispatch(addPostCreator());
    }

    const updatePost = (text) => {
        dispatch(updatePostCreator(text));
    }

    return (
        <Posts posts={posts} newPostText={newPostText} addPost={addPost} updatePost={updatePost} />
    )
}
