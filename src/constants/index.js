
import {
  logo,
  backend,
  creator,
  mobile,
  soc,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import Aracreate from "../assets/company/Aracreate.png";
import HackersSchool from "../assets/company/Hackers.png";
import Infotact from "../assets/company/Infotact.png";
import THM from "../assets/company/THM.png";
import HTB from "../assets/company/HTB.png";
import java from "../assets/tech/java.png";
import wireshark from "../assets/tech/wireshark.png";
import burp from "../assets/tech/burp.png";
import nmap from "../assets/tech/nmap.png";
import python from "../assets/tech/python.png";
import linux from "../assets/tech/linux.png";
import kali from "../assets/tech/kali.png";

// Import project images separately
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";

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
    title: "SOC Analyst",
    icon: soc,
  },

  {
    title: "Incident Responder",
    icon: web,
  },
  {
    title: "Threat Hunter",
    icon: mobile,
  },
  {
    title: "Security Researcher",
    icon: backend,
  },
  // {
  //   title: "Ui UX Designer",
  //   icon: creator,
  // },
];

const technologies = [
  
  {
    name: "Java",
    icon: java,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "gsap",
  //   icon: gsap,
  // },
  // {
  //   name: "framer",
  //   icon: framer,
  // },

 
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Material Ui",
  //   icon: mui,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express Js",
  //   icon: express,
  // },
  // {
  //   name: "AWS",
  //   icon: aws,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 
  {
    name: "wireshark",
    icon: wireshark,
  },

  {
    name: "burp",
    icon: burp,
  },

  {
    name: "nmap",
    icon: nmap,
  },

  {
    name: "python",
    icon: python,
  },

  {
    name: "linux",
    icon: linux,
  },

  {
    name: "kali",
    icon: kali,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company_name: "Aracreate India Pvt.Ltd",
    icon: Aracreate,
    iconBg: "#383E56",
    date: "Jan 2025 - Mar 2025",
    points: [
      "Developedweb applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
  title: "Junior SOC Analyst Intern",
    company_name: "Hackers School",
    icon: HackersSchool,
    iconBg: "#383E56",
    date: "Jul 2025 - Aug 2025",
    points: [
      "Performed log analysis & triage using Splunk and QRadar for real-time monitoring.",
      "Investigated phishing campaigns, brute-force attempts, and malicious IP activities.",
      "Assisted in playbook creation and SIEM rule tuning to minimize false positives.",
      "Collaborated with the SOC team to improve incident detection and escalation workflows.",
      "Documented incident response procedures and contributed to threat intelligence sharing."
    ],
  },
  {
  title: "L1 Security Admin Associate Intern",
    company_name: "Infotact Solutions",
    icon: Infotact,
    iconBg: "#383E56",
    date: "Sep 2025 - Dec 2025",
    points: [
      "Conducted vulnerability scans and performed secure code reviews to identify weaknesses.",
      "Monitored logs and alerts from multiple sources ensuring compliance & threat prevention.",
      "Prepared security documentation including policies, IR plans, and system hardening guides.",
      "Supported patch management and coordinated with IT teams for timely remediation.",
      "Assisted in incident handling, escalating high-severity threats to senior analysts."
    ],
  },
  {
  title: "CTF Player",
    company_name: "TryHackMe",
    icon: THM,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Actively participate in Capture The Flag (CTF) challenges on Hack The Box and TryHackMe.", 
      "solving a wide range of cybersecurity problemsThese include web application security.", 
      "reverse engineering, cryptography, networking exploits, privilege escalation, forensics, and system exploitation."
    ],
  },
  {
  title: "CTF Player",
    company_name: "Hack The Box",
    icon: HTB,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Actively participate in Capture The Flag (CTF) challenges on Hack The Box and TryHackMe.", 
      "solving a wide range of cybersecurity problemsThese include web application security.", 
      "reverse engineering, cryptography, networking exploits, privilege escalation, forensics, and system exploitation."
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Huzaif proved me wrong.",
  //   name: "MD Mustaqeem",
  //   designation: "Ecommerce",
  //   company: "QuickMart",
  //   image: firstTestimonial,
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Huzaif does.",
  //   name: "Abdul Raheman",
  //   designation: "Ecommerce Business",
  //   company: "justbuyz",
  //   image: secondTestimonial,
  // },
  // {
  //   testimonial:
  //     "After Huzaif optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "James Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: thirdTestimonial,
  // },
];

const projects = [
  // {
  //   name: "Tekisky Mart",
  //   description:
  //     "Tekisky Mart is a web-based platform that allows users to search, explore, and purchase a wide range of products from various providers, offering a seamless and efficient shopping experience.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "node",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
 
  //   ],
  //   image: project2,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "GearXpert",
  //   description:
  //     "GearXpert is your ultimate destination for premium auto parts and accessories, Whether you're an automobile enthusiast or a professional, find everything you need to upgrade, repair.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "emailJs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Gsap",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: gearXpert,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "GoGroove-Ecommerce",
  //   description:
  //     "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "node",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link: "https://github.com/",
  // },
    {
    name: "Phising Link Scanner",
    description:
      "This Python tool analyzes URLs to detect phishing by checking malicious domains, suspicious keywords, unsafe protocols, and abnormal URL structures. It classifies each input link as either malicious or safe to support quick security validation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/Vignesh85245/Phising-Scanner.git",
  },
   {
    name: "NIDS using Snort",
    description:
      "A practical defensive cybersecurity project focused on creating and testing custom NIDS rules to detect reconnaissance, intrusion attempts, and suspicious traffic. It strengthened skills in packet analysis, alert tuning, threat identification, and incident detection within a controlled environment, improving accuracy and reducing false positives for real world SOC operations.",
    tags: [
      {
        name: "snort",
        color: "blue-text-gradient",
      },
      {
        name: "kali",
        color: "white-text-gradient",
      },
      {
        name: "ubuntu",
        color: "green-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/Vignesh85245/Network-Intrusion-Detection-System-NIDS-Rule-Creation-and-Testing-Lab.git",
  },

  // {
  //   name: "Magic Clay-Ecommerce",
  //   description:
  //     "Magic Clay is an e-commerce platform specializing in a wide range of handcrafted ceramic products. It offers unique, artistic pottery and clay items for home decor, kitchenware, and gifting!",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "express",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "node",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project4,
  //   source_code_link: "https://github.com/Vignesh85245/ACT-magic-clay.git",
  // },
  // {
  //   name: "Agricultural Robot",
  //   description:
  //     "This project focuses on developing an advanced agricultural robot to enhance farming efficiency through real-time monitoring and automation!",
  //   tags: [
  //     {
  //       name: "Blynk IoT",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "Embedded C",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project5,
  //   source_code_link: "https://github.com/Vignesh85245/Agricultural_robot.git",
  // },
  // {
  //   name: "Frontend Projects",
  //   description:
  //     "This repository showcases a collection of frontend projects that demonstrate various web development skills and technologies, including HTML, CSS, and JavaScript!",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "yellow-text-gradient",
  //     },
  //   ],
  //   image: project6,
  //   source_code_link: "https://github.com/Vignesh85245/frontend-projects.git",
  // },
];

export { services, technologies, experiences, testimonials, projects };
