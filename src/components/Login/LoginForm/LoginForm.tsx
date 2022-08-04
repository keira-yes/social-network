import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { Input } from "../../hoc/FormField/FormField";
import { maxLength, required } from "../../../utils/validators";
import styles from "../../hoc/FormField/FormField.module.css";
import { LoginDataType } from "../../../types/types";

const maxLength16 = maxLength(16);

type LoginFormOwnPropsType = {
    captcha: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginDataType, LoginFormOwnPropsType> & LoginFormOwnPropsType> = (
    { handleSubmit, error, captcha }
    ) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <Field
                    id="login"
                    name="login"
                    component={Input}
                    type="text"
                    validate={required}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    component={Input}
                    type="password"
                    validate={[required, maxLength16]}
                />
            </div>
            <div>
                <Field
                    name="rememberMe"
                    component="input"
                    type="checkbox"
                />
                <label htmlFor="rememberMe">Remember me</label>
            </div>
            {captcha && <div>
                <img src={captcha} alt="Captcha"/>
                <div>
                    <label htmlFor="captcha">Enter captcha</label>
                    <Field
                        id="captcha"
                        name="captcha"
                        component={Input}
                        type="text"
                        validate={required}
                    />
                </div>
            </div>}
            {error && <div className={styles.errorWindow}>{error}</div>}
            <button type="submit">Login</button>
        </form>
    )
}

export default reduxForm<LoginDataType, LoginFormOwnPropsType>({ form: 'login' })(LoginForm);
