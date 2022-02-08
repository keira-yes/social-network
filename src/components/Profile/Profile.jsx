import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Posts } from "./Posts/Posts";
import classes from './Profile.module.css';

export const Profile = ({ posts, addPost }) => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <Posts posts={posts} addPost={addPost} />
        </div>
    )
}
