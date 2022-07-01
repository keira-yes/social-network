import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../utils/validators";
import { Textarea } from "../../hoc/FormField/FormField";

const maxLength10 = maxLength(10);

const PostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="post">Enter Post</label>
                <Field
                    name="post"
                    component={Textarea}
                    validate={[required, maxLength10]}
                    placeholder="Enter post"
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default reduxForm({ form: 'post' })(PostForm);