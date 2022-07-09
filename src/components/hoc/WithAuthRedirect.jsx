import React from 'react';
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const WithAuthRedirect = Component => {
    function RedirectComponent(props) {
        if (!props.isAuth) return <Navigate to="/login" />
        return <Component {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default WithAuthRedirect;