import React from 'react';
import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts, addPost }) => {
    const newPostElem = React.createRef();

    const addNewPost = () => {
        let postContent = newPostElem.current.value;
        addPost(postContent);
        newPostElem.current.value = '';
    }

    return (
        <div>
            <div className="form">
                <textarea ref={newPostElem} name="post" id="post" cols="30" rows="5"></textarea>
                <button onClick={addNewPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {posts.map(item =>  <Post key={item.id} message={item.message} likes={item.likes} />)}
            </div>
        </div>
    )
}
