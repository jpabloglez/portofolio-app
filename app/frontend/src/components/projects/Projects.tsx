// src/components/ProjectsList.tsx

import React from 'react';

import { ProjectsList } from './ProjectsList';

interface ProjectsProps {
    projects: ProjectsList[];
}



const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-gray-500 text-left">
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-200 text-gray-600 px-2 py-1 mr-2 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
