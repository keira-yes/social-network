import React from 'react';
import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts, addPost, newPostText, updateNewPostText }) => {
    const newPostElem = React.createRef();

    const addNewPost = () => {
        addPost();
    }

    const handleTextarea = () => {
        let postContent = newPostElem.current.value;
        updateNewPostText(postContent)
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
