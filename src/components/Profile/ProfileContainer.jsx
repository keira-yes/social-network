import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithRouter from "../hoc/WithRouter";
import { Profile } from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/reducers/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { router, getProfile, getStatus } = this.props;
        const userId = router.params.id || 2;
        getProfile(userId);
        getStatus(userId);
    }

    render() {
        return (
            <Profile { ...this.props } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile,
        status: state.profileReducer.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus }),
    WithRouter
)(ProfileContainer);
