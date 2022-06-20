import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import WithRouter from "../hoc/WithRouter";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { router, getProfile } = this.props;
        const userId = router.params.id || 2;
        getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Navigate to="/login" />

        return (
            <Profile { ...this.props } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        isAuth: state.authReducer.isAuth
    }
}

export default connect(mapStateToProps, { getProfile })(WithRouter(ProfileContainer));
