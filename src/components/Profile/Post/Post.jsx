import classes from './Post.module.css';

export const Post = ({ message, likes }) => {
    return (
        <article className={classes.post}>
            <h3>Post</h3>
            <p>{message}</p>
            <button type="button">{likes}</button>
        </article>
    )
}
