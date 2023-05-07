// src/data.ts

export interface PublicationsList {
    title: string;
    publisher: string;
    date: string;
    link: string;
  }
  
  export const publications: PublicationsList[] = [
    {
      title: 'A Comprehensive Guide to Web Development',
      publisher: 'Web Dev Magazine',
      date: 'January 2022',
      link: 'https://example.com/publication1',
    },
    {
      title: 'Exploring the Future of Artificial Intelligence',
      publisher: 'AI Today',
      date: 'March 2022',
      link: 'https://example.com/publication2',
    },
  ];
  