import React from 'react';
import Preloader from "../../Preloader/Preloader";
import SocialMedia from "./SocialMedia/SocialMedia";
import avatar from "../../../assets/images/avatar.png";

const ProfileInfo = ({ profile, status }) => {
    if (!profile) return <Preloader />

    const {
        photos,
        fullName,
        aboutMe,
        lookingForAJob,
        lookingForAJobDescription,
        contacts
    } = profile;

    return (
        <div>
            <img src={photos.large ? photos.large : avatar} alt={fullName} />
            <h2>{fullName}</h2>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>About:</strong> {aboutMe}</p>
            <p><strong>Looking for a job:</strong> {lookingForAJob ? 'Yes' : 'No'}</p>
            <p><strong>Comment:</strong> {lookingForAJobDescription}</p>
            <SocialMedia contacts={contacts} />
        </div>
    )
}

export default ProfileInfo;
