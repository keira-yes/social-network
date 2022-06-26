import { Login } from './Login';
import { connect } from "react-redux";
import { logIn } from "../../redux/reducers/authReducer";

const LoginContainer = ({ isAuth, logIn }) => {
    const submitForm = (formData) => {
        logIn(formData.login, formData.password, formData.rememberMe);
    }

    return <Login isAuth={isAuth} submitForm={submitForm} />
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, { logIn })(LoginContainer);