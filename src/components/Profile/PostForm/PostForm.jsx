import { Field, reduxForm } from 'redux-form';

const PostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="post">Enter Post</label>
                <Field name="post" component="textarea" />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default reduxForm({ form: 'post' })(PostForm);