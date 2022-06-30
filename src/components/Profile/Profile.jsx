import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import classes from './Profile.module.css';

export const Profile = ({ profile, status, updateStatus })  => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
            <PostsContainer />
        </div>
    )
}
