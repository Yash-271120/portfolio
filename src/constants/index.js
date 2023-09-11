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
  solidity,
  udaan,
  bizup,
  swupelpms,
  woodo,
  imagegallery,
  decentralAmazon
} from "../assets";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Udaan",
    icon: udaan,
    iconBg: "#383E56",
    date: "May 2022 - Jul 2022",
    points: [
      "Developed a time-tracking solution for monitoring human worker activities in a warehouse environment.",
      "Implemented event triggering from the frontend using React, enabling efficient data capture.",
      "Integrated Mixpanel for real-time data analysis, enhancing decision-making processes.",
      "Collaborated closely with the robotics team to establish seamless communication between warehouse operations and robotics microservices.",
      "Implemented robust error-handling mechanisms to ensure error-free data transfer, optimizing warehouse efficiency and accuracy.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SwupelPMS",
    icon: swupelpms,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Collaborated with a team of developers to redesign and optimize the Swupelpms brand website.",
      "Played a key role in enhancing the overall performance and user experience of the website.",
      "Contributed to the development of the Swupelpms blockchain, utilizing C++.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Bizup",
    icon: bizup,
    iconBg: "#383E56",
    date: "Jun 2023 - Present",
    points: [
      "Developed an AI-powered chat functionality for a web application (MVP) that empowered sellers to create, add, and share catalog links with buyers.",
      "Implemented advanced analytics for performance tracking and business growth, providing valuable insights.",
      "Currently working on a product in React Native for Android and iOS platforms that assists sellers with seamless onboarding, efficient profile management, and easy uploading and sharing of new catalog and video ads.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Working closely with Yash during their internship was truly rewarding. He consistently demonstrated a strong commitment to learning and a keen problem-solving ability, contributing significantly to our projects",
    name: "Kartik Yadav",
    designation: "Software Engineer",
    company: "Udaan",
    image:
      "https://media.licdn.com/dms/image/C5103AQEhi4eIhLpM2g/profile-displayphoto-shrink_200_200/0/1540023111952?e=1700092800&v=beta&t=vG8lIWtZ5jXVUk2ytL8YhwjxtawRotN1pc2Ty1UXzio",
  },
  {
    testimonial:
      "With Yash being a capable, conscientious and overall well rounded programmer, collaboration is not only a pleasure on the technical side but also always fun and enjoyable due to his down to earth nature and open communication.",
    name: "Anton Graller",
    designation: "Founder",
    company: "SwupelPMS",
    image:
      "https://cdn.discordapp.com/avatars/773924328122875926/261b94a96330963f712347ab6453ce41.webp?size=80",
  },
];

const projects = [
  {
    name: "Woodo",
    description:
      "Web-based platform that allows users to buy furniture and home decor items from a wide range of furniture options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: woodo,
    source_code_link: "https://github.com/Yash-271120/Woodo",
  },
  {
    name: "Decentral Amazon",
    description:
      "A decentralized e-commerce platform that allows users to buy products using Ethereum. The platform is powered by IPFS and smart contracts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "hardhat",
        color: "green-text-gradient",
      },
      {
        name: "solidity",
        color: "pink-text-gradient",
      },
      {
        name: "ipfs",
        color: "green-text-gradient",
      },
    ],
    image: decentralAmazon,
    source_code_link: "https://github.com/Yash-271120/decentral-amazon",
  },
  {
    name: "Image Gallery",
    description:
      "A comprehensive image gallery that allows users to search for images and view them in a grid layout.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: imagegallery,
    source_code_link: "https://github.com/Yash-271120/Image-Gallery",
  },
];

export { services, technologies, experiences, testimonials, projects };
