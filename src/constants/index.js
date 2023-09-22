import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: '3D Artist',
    icon: mobile,
  },
  {
    title: 'Martial Artist',
    icon: backend,
  },
  {
    title: 'Physical Marketer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Zbrush',
    icon: typescript,
  },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Adobe Photoshop',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  // {
  //   name: 'git',
  //   icon: git,
  // },
  // {
  //   name: 'Adobe Illustrator',
  //   icon: figma,
  // },
  // {
  //   name: 'Blender',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Media Analyst',
    company_name: 'Champlain College - Emergent Media Center',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'Sept 2011 - April 2012',
    points: [
      'Working on a team brainstorming potential projects.',
      'Collaborating with cross-functional teams to create high-quality products.',
      'Researching creative applications of the Microsoft Kinect.',
      'Participating in art reviews and providing constructive feedback to other artists.',
    ],
  },
  {
    title: 'Groundskeeper',
    company_name: 'Aspetuck Valley Country Club',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jun 2013 - June 2014',
    points: [
      'Maintaining golf course.',
      'Operating heavy machinery with precision.',
      'Mowing tees, greens, collars, approaches.',
      'Seeding, fertilizing, planting, trimming.',
    ],
  },
  {
    title: 'Graphic Artist',
    company_name: 'Baron Technology Inc.',
    icon: shopify,
    iconBg: '#383E56',
    date: 'June 2014 - March 2020',
    points: [
      'Designing new scrollwork and artwork.',
      'Painting finely detailed rifle stocks, handguards, pistol grips.',
      'Polishing and preparing designs for laser.',
      'Setting up metal, glass, and wood parts to be laser engraved.',
    ],
  },
  {
    title: 'Physical Marketer',
    company_name: 'Ground Control Marketing',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - Present',
    points: [
      'Traveling efficiently to residences across the state.',
      'Delivering marketing materials.',
      'Engaging with customers about their internet service.',
      'Reporting numbers accurately.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Ryan proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ryan does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Ryan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
