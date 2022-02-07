import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = ({ posts }) => {
    return (
        <div className={classes.posts}>
            {posts.map(item =>  <Post message={item.message} likes={item.likes} />)}
        </div>
    )
}
