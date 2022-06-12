import { Preloader } from "../../Preloader/Preloader";

export const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src={profile.photos.large} alt=""/>
            <h2>{profile.fullName}</h2>
        </div>
    )
}
