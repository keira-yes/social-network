import{ Post } from "../Post/Post";
import classes from './Posts.module.css';

const posts = [
    {id: 1, message: "Hello World!", likes: 5},
    {id: 2, message: "My first post...", likes: 12}
]

export const Posts = () => {
    return (
        <div className={classes.posts}>
            {posts.map(item =>  <Post message={item.message} likes={item.likes} />)}
        </div>
    )
}
