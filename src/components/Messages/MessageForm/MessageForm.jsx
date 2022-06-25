import { Field, reduxForm } from 'redux-form';

const MessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Enter Message</label>
                <Field name="message" component="textarea" />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default reduxForm({ form: 'message' })(MessageForm);