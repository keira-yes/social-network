import React from "react";
import { connect } from "react-redux";
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
        return (
            <Profile { ...this.props } />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileReducer.profile
    }
}

export default connect(mapStateToProps, { getProfile })(WithRouter(ProfileContainer));
