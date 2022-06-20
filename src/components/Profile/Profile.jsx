import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import classes from './Profile.module.css';
import React from "react";

export const Profile = ({ profile })  => {

    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo profile={profile} />
            <PostsContainer />
        </div>
    )
}
