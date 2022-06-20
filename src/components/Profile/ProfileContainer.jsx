import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithRouter from "../hoc/WithRouter";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/reducers/profileReducer";
import WithAuthRedirect from "../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { router, getProfile } = this.props;
        const userId = router.params.id || 2;
        getProfile(userId);
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
    }
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    WithAuthRedirect,
    WithRouter
)(ProfileContainer);
