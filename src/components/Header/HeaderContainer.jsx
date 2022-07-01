import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/reducers/authReducer";

const HeaderContainer = props => {
    return <Header {...props} />
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        authData: state.authReducer.authData
    }
}

export default connect(mapStateToProps, { logOut })(HeaderContainer);
