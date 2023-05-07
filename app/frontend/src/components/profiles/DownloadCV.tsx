// src/components/DownloadCVButton.tsx

import React from 'react';

interface DownloadCVButtonProps {
  cvURL: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ cvURL }) => {
  return (
    <a
      href={cvURL}
      download="CV_John_Doe.pdf"
      className="bg-blue-100 text-gray-500 font-bold py-2 px-4 rounded hover:bg-blue-200"
    >
      Download CV
    </a>
  );
};

export default DownloadCVButton;
