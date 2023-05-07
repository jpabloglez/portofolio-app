import React from "react";

export default function About({title}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="container bg-white shadow-md rounded-lg pl-2 mx-auto flex items-center sm:flex-row flex-col">
      <div className="mt-4">
        {/*Title About me*/}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-500 text-left flex items-center space-x-4">
            <span>About me</span>
            <div className="border-t-4 border-neutral-200 flex-grow max-w-sm"></div>
          </h2>
        </div>
        <p className="text-gray-500 text-justify px-2 py-2">
          Jane Doe is a skilled data scientist and software developer with over
          6 years of experience in the industry. She holds a Master's degree in
          Data Science from XYZ University and has a strong background in
          machine learning, statistical modeling, and data analysis. Proficient
          in Python, R, and SQL, Jane has worked on numerous projects,
          leveraging her expertise in data visualization, natural language
          processing, and deep learning to deliver actionable insights and build
          data-driven applications. As a software developer, she is experienced
          in using modern technologies like JavaScript, React, and Node.js to
          build scalable and efficient web applications. She is passionate about
          learning new technologies and staying up-to-date with the latest
          industry trends. In her spare time, Jane enjoys contributing to
          open-source projects, writing technical blog posts, and mentoring
          aspiring data scientists and developers. She is also an avid reader
          and loves exploring the great outdoors.
        </p>
      </div>
    </div>
  );
}
