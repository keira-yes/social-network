import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header';
import { getAuthData } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
        authData: state.authReducer.authData
    }
}

export default connect(mapStateToProps, { getAuthData })(HeaderContainer);
