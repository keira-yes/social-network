import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header';
import { logOut } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authReducer.isAuth,
        authData: state.authReducer.authData
    }
}

export default connect(mapStateToProps, { logOut })(HeaderContainer);
