import React, { useState } from "react";
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import ProfileStatus from "../ProfileInfo/ProfileStatus/ProfileStatus";
import SocialMedia from "../ProfileInfo/SocialMedia/SocialMedia";
import MyProfileForm from "../MyProfileForm/MyProfileForm";

const MyProfile = ({ profile, status, updateAvatar, updateStatus, submitForm }) => {
    const [editMode, setEditMode] = useState(false);

    const onEditMode = () => {
        setEditMode(true);
    }

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

    console.log(profile)

    return (
        <div>
            <img src={photos.large ? photos.large : avatar} alt={fullName} />
            <label><input type="file" onChange={handleChangeFile} /></label>
            <ProfileStatus status={status} updateStatus={updateStatus} />
            {editMode ?
                <MyProfileForm initialValues={profile} onSubmit={submitForm} /> :
                <div>
                    <button type="button" onClick={onEditMode}>Edit about information</button>
                    <h2>{fullName}</h2>
                    <p><strong>About:</strong> {aboutMe}</p>
                    <p><strong>Looking for a job:</strong> {lookingForAJob ? 'Yes' : 'No'}</p>
                    <p><strong>Comment:</strong> {lookingForAJobDescription}</p>
                    <SocialMedia contacts={contacts} />
                </div>
            }
        </div>
    )
}

export default MyProfile;