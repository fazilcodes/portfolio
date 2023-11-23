// import Project1 from './assets/project1.jpeg';
// import Project2 from './assets/project2.jpg';
// import Project3 from './assets/project3.jpeg';
// import Project4 from './assets/project4.jpeg';
// import Project5 from './assets/project5.jpg';
// import Project6 from './assets/project6.jpg';

import Python from '../assets/py.png'
import Javascript from '../assets/js.png'
import React_js from '../assets/react.png'
import Django from '../assets/django.png'
import Figma from '../assets/figma.png'
import Tailwind from '../assets/tailwind.png'

import Dream_fit from '../assets/project_image/dream_fit.png'
import Blog_daily from '../assets/project_image/blog_daily.png'

export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'Skills',
    path: 'skills',
  },
  {
    name: 'Works',
    path: 'work',
  },
  {
    name: 'Resume',
    path: 'resume',
  },
  {
    name: 'Contact',
    path: 'contact',
  },
];

export const skills = [
  {
    id: 1,
    name: 'Python',
    img: Python,
    percentage: 90,
    description:
      ' Versatile high-level programming language known for its simplicity and readability, ideal for diverse applications and rapid development.',
  },

  {
    id: 2,
    name: 'JavaScript',
    img: Javascript,
    percentage: 85,
    description:
      'Dynamic scripting language enabling interactive web pages and web applications, widely used for front-end and back-end development.',
  },

  {
    id: 3,
    name: 'React',
    img: React_js,
    percentage: 80,
    description:
      'opular JavaScript library for building user interfaces, offering efficient, component-based development and seamless data management.',
  },

  {
    id: 4,
    name: 'Django',
    img: Django,
    percentage: 95,
    description:
      'High-level Python web framework promoting rapid development and clean, pragmatic design for creating secure and scalable web applications.',
  },

  {
    id: 5,
    name: 'Figma',
    img: Figma,
    percentage: 70,
    description:
      'Collaborative interface design tool fostering efficient team workflows for creating and implementing visually appealing digital designs.',
  },

  {
    id: 6,
    name: 'Tailwind',
    img: Tailwind,
    percentage: 75,
    description:
      'Utility-first CSS framework streamlining web design with customizable and responsive components, enhancing rapid and flexible UI development.',
  },
];

export const projects = [
  {
    id: 1,
    img: Dream_fit,
    category: 'React',
    title: 'Dream Fit',
    live: 'https://dream-fit-fazilcodes.vercel.app',
    code: 'https://github.com/fazilcodes/Dream-Fit-Frontent',
    description:
      'Fitness Application with Daily Workouts and Preferred muscles workouts Api.',
  },
  {
    id: 2,
    img: Blog_daily,
    category: 'Django',
    title: 'Blog Daily',
    code: 'https://github.com/fazilcodes/BlogDaily-Django',
    description:
      'Blog Application With all modern features and authentications',
  },
  {
    id: 3,
    img: "",
    category: 'MERN',
    title: 'Explore',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 4,
    img: "",
    category: 'Javascript',
    title: 'Mozar',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 5,
    img: "",
    category: 'HTML & CSS',
    title: 'Stay Fit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    id: 6,
    img: "",
    category: 'FIGMA',
    title: 'Kana',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  },
];

export const cv = [
  {
    id: 1,
    title: 'University of Calicut',
    subtitle: 'Bsc Computer Science',
    date: '2019 - 2022',
    description:
      'Computer science graduate with expertise in software development and algorithms.',
    category: 'education',
  },

  {
    id: 2,
    title: 'GHSS Alanallur',
    subtitle: 'Computer science',
    date: '2017 - 2019',
    description:
      'Completion of senior secondary education with emphasis on science stream. And a Leap to Tech world',
    category: 'education',
  },

  {
    id: 3,
    title: 'MEMS',
    subtitle: '10th CBSE',
    date: '2016 - 2017',
    description:
      'Secondary education with a focus on mathematics and scientific fundamentals.',
    category: 'education',
  },

  {
    id: 4,
    title: 'Luminar Technolab',
    subtitle: 'Python Intership',
    date: '2023 - PRESENT',
    description:
      'Hands-on Python full-stack development internship, encompassing web applications and databases, fostering expertise in both front-end and back-end technologies.',
    category: 'experience',
  },

  {
    id: 5,
    title: 'Riss Technologies',
    subtitle: 'Python Intership',
    date: '2022 - 2023',
    description:
      'Engaged in Python internship, acquiring expertise in backend development, data analysis, and automation through practical hands-on projects and mentorship.',
    category: 'experience',
  },

  {
    id: 6,
    title: 'Freelance',
    subtitle: 'Fiverr.com',
    date: '2022 - Present',
    description:
      'web developer creating responsive and visually appealing websites using modern technologies and frameworks.',
    category: 'experience',
  },
];

