import { Preloader } from "../../Preloader/Preloader";
import Facebook from "../../../assets/images/facebook.svg";
import Web from "../../../assets/images/web.svg";
import Vk from "../../../assets/images/vk.svg";
import Twitter from "../../../assets/images/twitter.svg";
import Instagram from "../../../assets/images/instagram.svg";
import Youtube from "../../../assets/images/youtube.svg";
import Github from "../../../assets/images/github.svg";
import Link from "../../../assets/images/link.svg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

export const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />
    }

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
            <img src={photos.large} alt={fullName} />
            <h2>{fullName}</h2>
            <ProfileStatus status="Status" />
            <p><strong>About:</strong> {aboutMe}</p>
            <p><strong>Looking for a job:</strong> {lookingForAJob ? 'Yes' : 'No'}</p>
            <p><strong>Comment:</strong> {lookingForAJobDescription}</p>
            <div>
                {facebook && <a href={facebook}><img src={Facebook} alt="Facebook"/></a>}
                {website && <a href={website}><img src={Web} alt="Website"/></a>}
                {vk && <a href={vk}><img src={Vk} alt="Vk"/></a>}
                {twitter && <a href={twitter}><img src={Twitter} alt="Twitter"/></a>}
                {instagram && <a href={instagram}><img src={Instagram} alt="Instagram"/></a>}
                {youtube && <a href={youtube}><img src={Youtube} alt="Youtube"/></a>}
                {github && <a href={github}><img src={Github} alt="Github"/></a>}
                {mainLink && <a href={mainLink}><img src={Link} alt="Link"/></a>}
            </div>
        </div>
    )
}
