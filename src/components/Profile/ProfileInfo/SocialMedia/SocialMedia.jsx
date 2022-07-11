import React from 'react';
import facebook from "../../../../assets/images/facebook.svg";
import website from "../../../../assets/images/web.svg";
import vk from "../../../../assets/images/vk.svg";
import twitter from "../../../../assets/images/twitter.svg";
import instagram from "../../../../assets/images/instagram.svg";
import youtube from "../../../../assets/images/youtube.svg";
import github from "../../../../assets/images/github.svg";
import mainLink from "../../../../assets/images/link.svg";

const images = {
    facebook,
    website,
    vk,
    twitter,
    instagram,
    youtube,
    github,
    mainLink
}

const SocialMedia = ({ contacts }) => {

    return (
        <div>
            <h2>Contacts</h2>
            {Object.keys(contacts).map(contact => (
                    contacts[contact] &&
                    <a
                        key={contact}
                        href={contacts[contact]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={images[contact]} alt={contact} />
                    </a>
                )
            )}
        </div>
    )
}

export default SocialMedia;