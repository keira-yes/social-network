import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { PostsContainer } from "./Posts/PostsContainer";
import classes from './Profile.module.css';

export const Profile = ({ store }) => {
    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo />
            <PostsContainer
                // posts={posts}
                // newPostText={newPostText}
                // dispatch={dispatch}
                store={store}
            />
        </div>
    )
}
