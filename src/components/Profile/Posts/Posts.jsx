import React from 'react';
import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts, newPostText, dispatch }) => {
    const newPostElem = React.createRef();

    const addNewPost = () => {
        dispatch({ type: 'ADD_POST' });
    }

    const handleTextarea = () => {
        let postContent = newPostElem.current.value;
        dispatch({ type: 'UPDATE_NEW_POST_TEXT', payload: postContent });
    }

    return (
        <div>
            <div className="form">
                <textarea ref={newPostElem} value={newPostText} onChange={handleTextarea} />
                <button onClick={addNewPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {posts.map(item =>  <Post key={item.id} message={item.message} likes={item.likes} />)}
            </div>
        </div>
    )
}
