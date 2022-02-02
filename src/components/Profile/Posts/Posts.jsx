import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

export const Posts = () => {
    return (
        <div className={classes.posts}>
            <Post />
        </div>
    )
}
