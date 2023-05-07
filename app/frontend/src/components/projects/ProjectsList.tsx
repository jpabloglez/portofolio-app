// src/data.ts

export interface ProjectsList {
    title: string;
    description: string;
    technologies: string[];
  }
  
  export const projects: ProjectsList[] = [
    {
      title: 'SAAS Platform',
      description: 'Sowftware development project for a SAAS platform',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Ruby on Rails', 'PostgreSQL']  
    },
    {
      title: 'Segmentation algorithm for MRI images',
      description: 'DL model for segmentation of MRI images of the brain',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Numpy', 'Matplotlib']
    },
  ];
  