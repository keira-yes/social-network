import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Header } from './Header';
import { setAuthData } from '../../redux/reducers/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(({ data }) => {
            if (data.resultCode === 0) {
                this.props.setAuthData(data);
            }
        });
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

export default connect(mapStateToProps, { setAuthData })(HeaderContainer);
