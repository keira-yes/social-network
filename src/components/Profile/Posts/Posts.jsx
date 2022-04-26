import React from 'react';
import { Post } from '../Post/Post';
import classes from './Posts.module.css';

export const Posts = ({ postsReducer, addPost, updatePost }) => {
    const newPost = React.createRef();

    const onAddPost = () => {
        addPost();
    }

    const onUpdatePost = () => {
        let postContent = newPost.current.value;
        updatePost(postContent);
    }

    return (
        <div>
            <div className="form">
                <textarea ref={newPost} value={postsReducer.newPostText} onChange={onUpdatePost} />
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={classes.posts}>
                {postsReducer.posts.map(item => <Post key={item.id} message={item.message} likes={item.likes} />)}
            </div>
        </div>
    )
}
