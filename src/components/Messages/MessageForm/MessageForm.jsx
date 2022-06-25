import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../../hoc/FormField/FormField";
import { required, maxLength } from "../../../utils/validators";

const maxLength20 = maxLength(20);

const MessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Enter Message</label>
                <Field
                    name="message"
                    component={Textarea}
                    validate={[required, maxLength20]}
                    placeholder="Enter message"
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default reduxForm({ form: 'message' })(MessageForm);