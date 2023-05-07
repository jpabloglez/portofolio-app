import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import DownloadCVButton from "./DownloadCV";

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  urlcv: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  image,
  description,
  github,
  linkedin,
  twitter,
  urlcv,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-xs">
      <div className="flex items-center justify-center">
        <img
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          src={image}
          alt={name}
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-md font-bold text-gray-500">{name}</h2>
        <p className="text-gray-600">{title}</p>
        {/*<p className="mt-2 text-gray-500">{description}</p>*/}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-gray-600 hover:text-gray-800"
              icon={faGithub}
              size="2x"
            />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-gray-600 hover:text-gray-800"
              icon={faLinkedin}
              size="2x"
            />
          </a>
        )}
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="text-gray-600 hover:text-gray-800"
              icon={faTwitter}
              size="2x"
            />
          </a>
        )}
      </div>
      <button className="bg-blue-100 hover:bg-blue-100 text-white font-bold mt-2 py-1:w px-1 rounded">
        <DownloadCVButton cvURL={urlcv} />
      </button>
    </div>
  );
};

export default ProfileCard;
