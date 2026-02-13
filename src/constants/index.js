const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

// const words = [
//   { text: "Ideas", imgPath: "/images/ideas.svg" },
//   { text: "Concepts", imgPath: "/images/concepts.svg" },
//   { text: "Designs", imgPath: "/images/designs.svg" },
//   { text: "Code", imgPath: "/images/code.svg" },
//   // { text: "Ideas", imgPath: "/images/ideas.svg" },
//   // { text: "Concepts", imgPath: "/images/concepts.svg" },
//   // { text: "Designs", imgPath: "/images/designs.svg" },
//   // { text: "Code", imgPath: "/images/code.svg" },
// ];

const words = [
  { id: 1, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 2, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 3, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 4, text: "Code", imgPath: "/images/code.svg" },
  { id: 5, text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: 6, text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: 7, text: "Designs", imgPath: "/images/designs.svg" },
  { id: 8, text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/java.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/js-logo2.glb",
    scale: 40,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/SpringBootLogo.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Zuha’s contributions at One Shot Restoration elevated our quality and release confidence. He led our automation and validation efforts across critical workflows and helped the team move faster with fewer regressions.",
    imgPath: "/images/oneshotLogo.PNG",
    logoPath: "/images/oneshotLogo.PNG",
    title: "Software Developer In Test",
    date: "Jan 2023 - Present",
    responsibilities: [
      "Led end-to-end test automation for core workflows (job intake → estimate → work order → invoice), owning suite design, coverage strategy, and ongoing maintenance to catch regressions early.",
      "Designed practical QA process for a small/fast-moving team: risk-based test plans, smoke/regression suites, and clear defect reporting aligned to business impact.",
      "Led API + database validation efforts by creating repeatable checks (API assertions + SQL queries) to ensure customer, pricing, and job-status data stayed consistent across systems.",
      "Strengthened delivery quality by stabilizing flaky tests, improving test data setup, and adding repeatable checks for role-based access, approvals, and billing edge cases.",
      "Led cross-functional defect triage and release sign-off, prioritizing fixes by customer impact and ensuring critical jobs, approvals, and invoicing flows remained stable in production."
    ],
  },
  {
    review: "Zuha’s contributions to Infosys' clients is a perfect example of how Infosys wants to represent their clients. He approaches challenges with a problem-solving mindset and ready to move even in a quickly changing market.",
    imgPath: "/images/infosys.png",
    logoPath: "/images/infosyslogo.png",
    title: "Quality Assurance Engineer II",
    date: "May 2021 - Dec 2022",
    responsibilities: [
      "Executed comprehensive API testing using Postman for RESTful services, validating JSON/XML responses for payment processing systems.",
      "Executed exploratory and ad-hoc manual testing while developing Selenium automation scripts to validate new features and provide immediate feedback during QA sprints.",
      "Implemented end-to-end testing strategies for data migration projects, ensuring data integrity across multiple systems.",
      "Created detailed test plans and documentation in Azure DevOps, maintaining clear traceability between requirements and test cases.",
      "Evaluated user experience and usability across desktop and mobile platforms; provided feedback to improve accessibility and performance.",
    ],
  },
  {
    review: "Zuha’s work at The Body Shop brought a high level of quality and efficiency. He delivered solutions that enhanced our testing methods and strategies.",
    imgPath: "/images/bodyshop.png",
    logoPath: "/images/bodyshoplogo.png",
    title: "Quality Assurance Engineer",
    date: "August 2019 - April 2021",
    responsibilities: [
      "Conducted performance testing using JMeter for high-volume financial transactions, identifying and resolving bottlenecks.",
      "Designed and executed automated test suites using Selenium WebDriver with Java and TestNG framework.",
      "Led API testing initiatives for RESTful web services, ensuring robust integration testing coverage.",
      "Managed test execution in an Agile environment, participating in daily standups and sprint planning sessions",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about . He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  ,
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/zuha-ahmed/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
