import { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import WithRouter from "../hoc/WithRouter";
import Profile from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/reducers/profileReducer/profileReducer";

const ProfileContainer = props => {
    useEffect(() => {
        const { router, getProfile, getStatus } = props;
        const userId = router.params.id;
        getProfile(userId);
        getStatus(userId);
    }, []);

    return <Profile { ...props } />
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
