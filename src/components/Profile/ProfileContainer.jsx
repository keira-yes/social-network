import React from "react";
import { connect } from "react-redux";
import { setProfile } from "../../redux/reducers/profileReducer";
import WithRouter from "../hoc/WithRouter";
import { Profile } from "./Profile";
import { getProfile } from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const { router, setProfile } = this.props;
        const userId = router.params.id || 2;
        getProfile(userId).then(data => {
            setProfile(data);
        });
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

export default connect(mapStateToProps, { setProfile })(WithRouter(ProfileContainer));
