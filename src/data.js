import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";

import { SiLeetcode } from "react-icons/si";


import img2 from "./images/2.png"
import img5 from "./images/5.png";
import expenseTracker from "./images/expenseTracker.png";
import movie from "./images/movie.png";
import landingPage from "./images/landingPage.png";
import keypress from "./images/keypress.png";
import quiz from "./images/quiz.png";
import logo from './images/logo.jpeg';

export const Experience = [
  {
    id: 1,
    date: "February 2024 - August 2024 (8 months)",
    iconsSrc: <IoCodeWorking />,
    title: "Engineer Trainee",
    location: "Cognizant Technology solutions pvt. ltd.",
    description: "React.js , Next.js, Javascript, SQL",
  },
  {
    id: 2,
    date: "February 2023 - June 2023 (5 months)",
    iconsSrc: <IoCodeWorking />,
    title: "Software Developer Intern",
    location: "LegalPay Pvt. Ltd.",
    description:
      "React.js,Next.js,Javascript, Tailwind css",
  },
];



export const Projects = [
  {
    id: 1,
    name: "Pin Your Mood",
    imageSrc: img2,
    techs: "ReactJs, Javascript, Tailwind CSS",
    link: "https://pinyourmood.vercel.app/",
    github : "https://github.com/anushka3107-bit/Major-Project"
  },
  {
    id: 2,
    name: "Signature Application",
    imageSrc: img5,
    techs: "HTML,CSS,Javascript",
    link: "https://signature-js.vercel.app/",
    github: "https://github.com/anushka3107-bit/signature_js",
  },
  {
    id: 3,
    name: "Movie Application",
    imageSrc: movie,
    techs: "HTML,CSS,Javascript,API,React.js",
    link : "https://chillyfy-app.netlify.app/",
    github: "https://github.com/anushka3107-bit/chillyfy-app",
  },
  {
    id: 4,
    name: "Expense Tracker",
    imageSrc: expenseTracker,
    techs: "HTML,CSS,Javascript",
    link : "https://expense-tracker-javascript.vercel.app/",
    github: "https://github.com/anushka3107-bit/expenseTracker_javascript",
  },
  {
    id: 5,
    name: "KeyPress",
    imageSrc: keypress,
    techs: "HTML,CSS,Javascript",
    link : "https://keypress-javascript-k57e.vercel.app/",
    github: "https://github.com/anushka3107-bit/keypress_javascript",
  },
  {
    id: 6,
    name: "Landing Page",
    imageSrc: landingPage,
    techs: "React Js, CSS, Material UI",
    link: "https://xero-codee-two.vercel.app/",
    github: "https://github.com/anushka3107-bit/xero-codee",
  },
  
  {
    id: 7,
    name: "Quiz Application",
    imageSrc: quiz,
    techs: "HTML,CSS,Javascript",
    link : "https://quiz-app-one-rho-13.vercel.app/QuizQuestion",
    github: "https://github.com/anushka3107-bit/quiz-app",
  },
];


export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/Anushka-3107",
  },
  {
    id: 1,
    iconSrc: (
      <SiLeetcode className="text-yellow-500 text-3xl cursor-pointer" />
    ),
    name: "Leetcode",
    link: "https://leetcode.com/u/anushka3107/",
  },
  
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "https://x.com/Anushka312001",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/anushka31/",
  },

  
];