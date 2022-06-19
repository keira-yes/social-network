import React from 'react';
import { connect } from "react-redux";
import { Header } from './Header';
import { setAuthData } from '../../redux/reducers/authReducer';
import { usersAPI } from '../../api/usersAPI';

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.getAuthData().then(data => {
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
