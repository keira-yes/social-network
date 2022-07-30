import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import classes from "./Profile.module.css";

const Profile = ({ profile, status })  => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo profile={profile} status={status} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
