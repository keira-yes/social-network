import React from 'react';
import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts }) => {
    const newPostElem = React.createRef();

    const addPost = () => {
        const postContent = newPostElem.current.value;
    }

    return (
        <div>
            <div className="form">
                <textarea ref={newPostElem} name="post" id="post" cols="30" rows="5"></textarea>
                <button onClick={addPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {posts.map(item =>  <Post message={item.message} likes={item.likes} />)}
            </div>
        </div>
    )
}
