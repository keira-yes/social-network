import React from 'react';
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import ProfileStatus from "../ProfileInfo/ProfileStatus/ProfileStatus";
import SocialMedia from "../ProfileInfo/SocialMedia/SocialMedia";

const MyProfile = ({ profile, status, updateAvatar, updateStatus }) => {
    const handleChangeFile = (e) => {
        if (e.target.files[0]) {
            updateAvatar(e.target.files[0]);
        }
    }

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
            <label><input type="file" onChange={handleChangeFile} /></label>
            <h2>{fullName}</h2>
            <ProfileStatus status={status} updateStatus={updateStatus} />
            <p><strong>About:</strong> {aboutMe}</p>
            <p><strong>Looking for a job:</strong> {lookingForAJob ? 'Yes' : 'No'}</p>
            <p><strong>Comment:</strong> {lookingForAJobDescription}</p>
            <SocialMedia contacts={contacts} />
        </div>
    )
}

export default MyProfile;