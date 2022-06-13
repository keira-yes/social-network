import React from "react";
import { connect } from "react-redux";
import { setProfile } from "../../redux/reducers/profileReducer";
import { Profile } from "./Profile";
import axios from "axios";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios(`https://social-network.samuraijs.com/api/1.0/profile/10`).then(({ data }) => {
            this.props.setProfile(data);
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

export default connect(mapStateToProps, { setProfile })(ProfileContainer);
