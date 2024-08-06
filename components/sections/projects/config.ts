import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Omeverse',
    slug: 'omeverse',
    description:
      'Omeverse is a online gaming platform with over 10+ games, featuring public/private rooms, video calls, group chats supporting up to 1000+ concurrent users',
    thumbnail: '/images/projects/project1/omeverse.png',
    liveurl: 'https://omeverse.netlify.app'
  },
  {
    name: 'Social Minds',
    slug: 'social_minds',
    description:
      'Developed a social media web application with profile creation, post sharing, & friend addition features.',
    thumbnail: '/images/projects/project3/social_minds.png',
    liveurl: 'https://social-mind-shreyansh76.netlify.app/',  
    githuburl: 'https://github.com/Shreyansh-kankane/social-minds-frontend'
  },
  {
    name: 'PathSol Solutions',
    slug: 'pathsol',
    description:
      'Pathsol is a pathlogy lab software, enabling seamless management of 1000+ patients & staff members, 100+ doctors, 100+ hospitals. Automated receipt generation for lab test fee payments, directly emailing the receipt, enhancing efficiency and accuracy in financial transactions.',
    thumbnail: '/images/projects/project2/Pathsol.png',
    liveurl: 'https://pathsol.netlify.app/dashboard',
    githuburl: 'https://github.com/Shreyansh-kankane/lab-Software'
  },
  {
    name: 'Omeglerr',
    slug: 'omeglerr',
    description:
      'Omeglerr is an online video and chatting application, designed and develop to provide platform for people to meet new peoples and make new friends',
    thumbnail: '/images/projects/project4/omeglerr.png',
    liveurl: 'https://omeglerr.com/'
  },
  {
    name: 'Parking Management System (PMS)',
    slug: 'Pms',
    description:
      'Created a real-time dashboard for parking management with insights into bookings and revenues. Integrated license plate recognition using OpenCV and Tensorflow for efficient bookings and entry/exit control.',
    thumbnail: '/images/projects/project5/PMS.png',
    githuburl: 'https://github.com/Shreyansh-kankane/Parking-Automation-and-management'
  },
  {
    name: 'DailyNews & Updates',
    slug: 'dailyNews',
    description:
      'A website develop for getting real time news for different categories such as Business, Entertainment, Technology etc.',
    thumbnail: '/images/projects/project6/DailyNews.png',
    githuburl: 'https://github.com/Shreyansh-kankane/DailyNews'
  }
];

export { projects };
