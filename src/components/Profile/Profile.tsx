import React, { useEffect } from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import classes from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, selectStatus } from "../../redux/selectors/profileSelector";
import { getProfile, getStatus } from "../../redux/reducers/profileReducer/profileReducer";

type PropsType = {
    router: any
}

const Profile: React.FC<PropsType> = ({ router }) => {
    const profile = useSelector(selectProfile);
    const status = useSelector(selectStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        const userId = router.params.id;
        dispatch<any>(getProfile(userId));
        dispatch<any>(getStatus(userId));
    }, []);

    return (
        <div className={classes.profile}>
            <h1>Profile</h1>
            <ProfileInfo profile={profile} status={status} />
            <PostsContainer />
        </div>
    )
}

export default Profile;
