import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import classes from "./Profile.module.css";

const Profile = ({ profile, status, updateStatus })  => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
