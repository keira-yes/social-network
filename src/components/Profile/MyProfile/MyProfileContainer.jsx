import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import MyProfile from "./MyProfile";
import { updateAvatar, getProfile, getStatus, updateStatus } from "../../../redux/reducers/profileReducer/profileReducer";

const MyProfileContainer = props => {
    const { authData, getProfile, getStatus } = props;

    useEffect(() => {
        const userId = authData.data.id;
        getProfile(userId);
        getStatus(userId);
    }, []);

    return <MyProfile { ...props } />
}

const mapStateToProps = (state) => {
    return {
        authData: state.authReducer.authData,
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    }
}

export default compose(
    connect(mapStateToProps, { updateAvatar, getProfile, getStatus, updateStatus }),
    WithAuthRedirect
)(MyProfileContainer);