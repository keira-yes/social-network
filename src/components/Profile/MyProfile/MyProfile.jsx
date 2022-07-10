import React from 'react';
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../assets/images/avatar.png";
import ProfileStatus from "../ProfileInfo/ProfileStatus/ProfileStatus";
import facebookImg from "../../../assets/images/facebook.svg";
import webImg from "../../../assets/images/web.svg";
import vkImg from "../../../assets/images/vk.svg";
import twitterImg from "../../../assets/images/twitter.svg";
import instagramImg from "../../../assets/images/instagram.svg";
import youtubeImg from "../../../assets/images/youtube.svg";
import githubImg from "../../../assets/images/github.svg";
import linkImg from "../../../assets/images/link.svg";

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
        contacts: { facebook, website, vk, twitter, instagram, youtube, github, mainLink }
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
            <div>
                {facebook && <a href={facebook}><img src={facebookImg} alt="Facebook"/></a>}
                {website && <a href={website}><img src={webImg} alt="Website"/></a>}
                {vk && <a href={vk}><img src={vkImg} alt="Vk"/></a>}
                {twitter && <a href={twitter}><img src={twitterImg} alt="Twitter"/></a>}
                {instagram && <a href={instagram}><img src={instagramImg} alt="Instagram"/></a>}
                {youtube && <a href={youtube}><img src={youtubeImg} alt="Youtube"/></a>}
                {github && <a href={github}><img src={githubImg} alt="Github"/></a>}
                {mainLink && <a href={mainLink}><img src={linkImg} alt="Link"/></a>}
            </div>
        </div>
    )
}

export default MyProfile;