import React from 'react';
import { Posts } from "./Posts";
import { addPostCreator, updatePostCreator } from "../../../redux/reducers/postsReducer";

export const PostsContainer = ({ store }) => {
    const state = store.getState().postsReducer;

    const addPost = () => {
        store.dispatch(addPostCreator());
    }

    const updatePost = (text) => {
        store.dispatch(updatePostCreator(text));
    }

    return (
        <Posts
            posts={state.posts}
            newPostText={state.newPostText}
            addPost={addPost}
            updatePost={updatePost}
        />
    )
}
