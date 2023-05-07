import React from 'react';

import { PublicationsList } from './PublicationsList'; // Import the Publication interface

interface PublicationsProps {
  publications: PublicationsList[];
}


interface Publication {
  title: string;
  publisher: string;
  date: string;
  link: string;
}

interface PublicationsProps {
  publications: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full min-w-fit text-justify">
      <h2 className="text-2xl text-gray-500 font-semibold mb-4">Publications</h2>
      <ul>
        {publications.map((pub, index) => (
          <li key={index} className="mb-4">
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {pub.title}
            </a>
            <p className="text-gray-600">{pub.publisher}</p>
            <p className="text-gray-500">{pub.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
