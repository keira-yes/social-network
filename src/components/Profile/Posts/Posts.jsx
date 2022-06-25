import PostForm from '../PostForm/PostForm';
import { Post } from '../Post/Post';
import classes from './Posts.module.css';

export const Posts = ({ posts, addPost }) => {

    const addNewPost = data => {
        addPost(data.post);
    }

    return (
        <div>
            <PostForm onSubmit={addNewPost} />
            <div className={classes.posts}>
                {posts.map(item => <Post key={item.id} message={item.message} likes={item.likes} />)}
            </div>
        </div>
    )
}
