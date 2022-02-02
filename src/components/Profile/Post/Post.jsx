import classes from './Post.module.css';

export const Post = (props) => {
    return (
        <article className={classes.post}>
            <h3>Post</h3>
            <p>{props.message}</p>
        </article>
    )
}
