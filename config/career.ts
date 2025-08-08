import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "shatel",
    position: "Network Engineer",
    company: "Shatel",
    location: "Bojnurd, Iran",
    startDate: new Date("2014-09-23"),
    endDate: new Date("2016-09-22"),
    description: [
      "Performed physical network infrastructure work at telecom centers",
      "Troubleshooting and maintenance of network passive equipment",
      "Monitoring internet connection quality for customers"
    ],
    achievements: [
      "Resolved bandwidth issues in a Bojnurd district, improving internet speeds by 40% for local users",
      "Reduced network problem response time by 25% by implementing a basic monitoring system"
    ],
    skills: [],
    companyUrl: "https://www.shatel.ir",
    logo: "/shatel-logo.svg",
  },
  {
    id: "ir-tci",
    position: "Network Engineer",
    company: "IR-tci",
    location: "Bojnurd, Iran",
    startDate: new Date("2017-09-24"),
    endDate: new Date("2018-09-25"),
    description: [
      "Maintained and optimized network infrastructure for telecommunications services",
      "Implemented network security protocols and monitoring systems",
      "Collaborated with cross-functional teams to troubleshoot network issues"
    ],
    achievements: [
      "Resolved bandwidth issues in a Bojnurd district, improving internet speeds by 40% for local users",
      "Reduced network problem response time by 25% by implementing a basic monitoring system"
    ],
    skills: [],
    companyUrl: "https://www.tci.ir",
    logo: "/tci-logo.jpg",
  },
  {
    id: "Arvand-cloud",
    position: "Mobile Developer",
    company: "Arvand Cloud",
    location: "Bojnurd, Iran",
    startDate: new Date("2019-06-22"),
    endDate: new Date("2020-09-22"),
    description: [
      "Developed cross-platform mobile applications using React Native",
      "Integrated RESTful APIs with mobile frontend components",
      "Optimized app performance for low-bandwidth environments"
    ],
    achievements: [
      "Built 2 production-ready mobile apps",
      "Implemented offline-first functionality that increased user retention by 25%"
    ],
    skills: ["React Native", "Javascript", "HTML 5", "CSS 3"],
    companyUrl: "https://arvandlms.com/",
    logo: "/arvand-logo.png",
  },
  {
    id: "freelancing",
    position: "Frontend Developer (Freelance)",
    company: "Self-Employed",
    location: "Tehran, Iran",
    startDate: new Date("2020-10-01"),
    endDate: new Date("2021-10-01"),
    description: [
      "Developed websites and web applications using Next.js",
      "Implemented UI components based on client designs",
      "Collaborated with designers to create responsive layouts"
    ],
    achievements: [
      "Delivered 8+ projects with modern Next.js features like SSR and API routes",
      "Improved average page load speed by 35% through code optimization",
      "Created reusable component libraries for faster development"
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "HTML 5",
      "CSS 3",
      "Javascript"
    ],
    companyUrl: "https://khashayarasghari.com",
    logo: "/career/agentprod-logo.png",
  },
  {
    id: "snappfood",
    position: "Frontend Developer",
    company: "Snappfood",
    location: "Tehran, Iran",
    startDate: new Date("2022-02-20"),
    endDate: new Date("2023-04-21"),
    description: [
      "Implemented UI components for food followup platform",
      "Worked primarily on presentation layer with limited business logic involvement",
      "Collaborated with senior developers on feature implementation"
    ],
    achievements: [
      "Contributed to followup food orders application (crm)",
      "Reduced UI-related bugs by 30% through better component testing"
    ],
    skills: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Javascript"
    ],
    companyUrl: "https://snappfood.ir",
    logo: "/snappfood-logo.svg",
  },
  {
    id: "applyers",
    position: "Frontend Developer",
    company: "Applyers.ir",
    location: "Tehran, Iran",
    startDate: new Date("2023-04-22"),
    endDate: new Date("2024-10-21"),
    description: [
      "Developed main website using Next.js with SSR capabilities",
      "Built admin panel with React and internal component library",
      "Implemented API integrations for job listing features"
    ],
    achievements: [
      "Led migration from legacy jQuery code to modern React/Next.js stack",
      "Improved SEO scores by 40% through SSR implementation",
      "Reduced admin panel loading time by 50% via query optimization"
    ],
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Material UI",
      "Figma",
    ],
    companyUrl: "https://applyers.ir",
    logo: "/applyers-logo.png",
  },
  {
    id: "paya",
    position: "Frontend Developer",
    company: "Paya",
    location: "Tehran, Iran",
    startDate: new Date("2024-11-21"),
    endDate: "Present",
    description: [
      "Taking significant ownership of BI dashboard project development",
      "Implementing map-based features using Leaflet and OpenLayers",
      "Mentoring junior developers on frontend best practices"
    ],
    achievements: [
      "Architected modular dashboard components now used across 3 products",
      "Optimized map rendering performance by 60% for large datasets",
      "Introduced TypeScript adoption that reduced runtime errors by 45%"
    ],
    skills: [
      "React",
      "Typescript",
      "Highcharts",
      "Apex charts",
      "Chart.js",
      "Leaflet",
      "OpenLayers",
      "Shadcn",
      "prime react",
      "Material UI",
      "react testing library",
      "jest",
      "Storybook",
      "Framer motion"
    ],
    companyUrl: "",
    logo: "",
  }
];