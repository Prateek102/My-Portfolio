import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
} from "../assets";
import image from "../assets/company/southpoint.png"; // replace with your actual image file name
import clg from "../assets/company/mait.png";
import delta from "../assets/company/apna.png";
import Edufever from "../assets/company/edu.png";
import Mysqldb from "../assets/tech/mySql.png";
import threeJs from "../assets/tech/threejs.png";
import Bootstrap from "../assets/tech/bootstrap.png";
import cpp from "../assets/tech/Cpp.png";
import wander from "../assets/tech/Wanderlust.png";
import Tube from "../assets/tech/Youtube.png";
import Spotify from "../assets/tech/Spotify_img.png";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ReactJS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mySql",
    icon: Mysqldb,
  },
  {
    name: "Three JS",
    icon: threeJs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  
 
];

const experiences = [
  {
    title: "Diploma in CSE",
    company_name: "South point institute of technology",
    icon: image,
    iconBg: "#383E56",
    date: "Aug 2017 - july 2020",
    points: [
      "Completed a 3-year Diploma in Computer Science & Engineering from South Point Institute of Technology with 7.4 CGPA..",
      "Gained strong fundamentals in programming, data structures, algorithms, and software development..",
      "Built academic projects using HTML, CSS, JavaScript, Java, and MySQL..",
      "Collaborated in team projects and practical labs, enhancing problem-solving and teamwork skills.",
    ],
  },
  {
    title: "B.Tech in CSE",
    company_name: "Maharaja Agrasen Institute of Technology Delhi",
    icon: clg,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - june 2024",
    points: [
      "Completed B.Tech in Computer Science & Engineering from Maharaja Agrasen Institute of Technology, Delhi with 8.1 CGPA..",
      "Studied core CS subjects in depth including Operating Systems, Computer Networks, MySQL, and Machine Learning.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in coding contests and hackathons to enhance real-world problem-solving skills.",
    ],
  },
  {
    title: "Training",
    company_name: "Apna College Delta",
    icon: delta,
    iconBg: "#383E56",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Gained proficiency in MongoDB, Express.js, React.js, and Node.js, completing 5+ full-stack projects showcasing dynamic and responsive web applications.",
      "Learned the complete workflow of developing, testing, and deploying modern web applications, reducing deployment time by 20% through efficient practices.",
      "Enhanced problem-solving and debugging skills by resolving 30+ real-world issues, improving application performance and reliability",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Edufever",
    icon: Edufever,
    iconBg: "#121212",
    date: "Sep 2023 - March 2024",
    points: [
      "Frontend Development: improved 15+ responsive web pages using React.js, HTML, and CSS, improving website load time by 30% and   enhancing the user experience for 10,000+ monthly visitors seeking college-related information.",

      "Backend Development: Engineered and optimized 5+ RESTful APIs using Node.js and Express.js, streamlining data retrieval processes for over 1,000 college listings.",

      "Collaboration: Worked with a cross-functional team to deploy features that increased user engagement by 20%, including search filters and dynamic college content updates.",
    
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prateek proved me wrong.",
    name: "Ananya Sharma",
    designation: "Software Engineer",
    company: "Tata Consultancy Services",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGZ2vffYLSQJQ/profile-displayphoto-shrink_400_400/B56ZUAYrrvGoAk-/0/1739468226181?e=1750291200&v=beta&t=vxaXFkn8rqLxTFnYuy3JdlFVqpH7NhPjAvXJuBhPlog",
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Prateek does.",
    name: "Rohit Verma",
    designation: "Software Engineer",
    company: "Infosys Ltd.",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQEDtQCaJM6bVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1638977377719?e=1750291200&v=beta&t=WbJS4siwUFnOv1pmUbam15DrR8vhwsBncpfPgoHO3vk",
  },
  {
    testimonial:
      "After Prateek optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Priya Mehta",
    designation: "Software Engineer",
    company: "Wipro Technologies",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQEtexXX49yQjg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715695508303?e=1750291200&v=beta&t=HqcnSvs0cWnC4BeGVJJlb98fmmwnlyh5fCzOQJWiVB0",
  }
];

const projects = [
  {
    name: "Wanderlust",
    description:
      "Wanderlust is a travel platform that allows users to explore and share their favourite destinations. and incorporates various technologies for features like image upload, user authentication, and interactive maps.Technologies Used Node.js Express.js MongoDB MERN Stack(MongoDB, Express.js, React.js, Node.js)Multer for imageupload Cloudinary for image storage Passport.js for Authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wander,
    source_code_link: "https://github.com/Prateek102/Wanderlust-Major-Project",
  },
  {
    name: "YouTube Clone",
    description:
      "Developed a YouTube clone using React.js and integrated it with RapidAPI's YouTube Data API.Users can search and watch videos, browse categories, and view related content.Implemented responsive design for a smooth experience across devices. Showcases strong skills in API integration, React hooks, and component-based architecture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RepidAPI",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "orange-text-gradient",
      },
    ],
    image: Tube,
    source_code_link: "https://github.com/Prateek102/YouTube_Clone",
  },
  {
    name: " Spotify Clone",
    description:
      "This project is a frontend-only user interface clone of the popular music streaming platform Spotify. Built using Html and  CSS, the clone accurately replicates the visual design and layout of the original application. It features a responsive sidebar, playlist layout, and music player interface. The primary goal of the project was to demonstrate expertise in creating pixel-perfect responsive UIs.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image:  Spotify,
    source_code_link: "https://github.com/Prateek102/Spotify-Frontend-Clone",
  },
];

export { services, technologies, experiences, testimonials, projects };
