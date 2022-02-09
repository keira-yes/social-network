import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts, newPostText, dispatch }) => {
    const newPostElem = React.createRef();

    const addNewPost = () => {
        dispatch(addPostActionCreator());
    }

    const handleTextarea = () => {
        let postContent = newPostElem.current.value;
        dispatch(updateNewPostTextActionCreator(postContent));
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
