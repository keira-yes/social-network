import { connect } from "react-redux";
import Login from "./Login";
import { logIn } from "../../redux/reducers/authReducer";

const LoginContainer = ({ isAuth, logIn }) => {
    const submitForm = ({ formData: {login, password, rememberMe } }) => {
        logIn(login, password, rememberMe);
    }
    return <Login isAuth={isAuth} submitForm={submitForm} />
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, { logIn })(LoginContainer);