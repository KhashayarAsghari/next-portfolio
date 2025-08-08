import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "HTML",
    description: "Semantic markup and web accessibility fundamentals",
    rating: 5,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description: "Responsive design, animations, and modern layout techniques",
    rating: 5,
    icon: Icons.css3,
  },
  {
    name: "JavaScript",
    description: "ES6+ features, DOM manipulation, and asynchronous programming",
    rating: 4,
    icon: Icons.javascript,
  },
  {
    name: "TypeScript",
    description: "Static typing, interfaces, and enhanced code quality",
    rating: 4,
    icon: Icons.typescript,
  },
  {
    name: "React.js",
    description: "Component-based architecture, hooks, and virtual DOM",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description: "SSR, SSG, API routes, and optimized production builds",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "React Native",
    description: "Cross-platform mobile app development with React",
    rating: 2,
    icon: Icons.react, // Use a React Native icon if available
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "Bootstrap",
    description: "Responsive grid system and pre-built components",
    rating: 4,
    icon: Icons.bootstrap,
  },
  {
    name: "Material UI",
    description: "Google's design system implementation for React",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Ant Design",
    description: "Enterprise-class UI design language and React components",
    rating: 3,
    icon: Icons.antd, // Add if available
  },
  {
    name: "shadcn/ui",
    description: "Beautifully designed components built with Radix UI",
    rating: 4,
    icon: Icons.shadcn, // Add if available
  },
  {
    name: "PrimeReact",
    description: "Collection of rich UI components for React",
    rating: 4,
    icon: Icons.prime, // Add if available
  },
  {
    name: "Sass/SCSS",
    description: "CSS preprocessor with variables, mixins, and nesting",
    rating: 4,
    icon: Icons.sass,
  },
  {
    name: "Framer Motion",
    description: "Production-ready animations for React applications",
    rating: 4,
    icon: Icons.framer, // Add if available
  },
  {
    name: "Storybook",
    description: "UI component development and documentation tool",
    rating: 2,
    icon: Icons.storybook, // Add if available
  },
  {
    name: "Figma",
    description: "Collaborative interface design and prototyping tool",
    rating: 4,
    icon: Icons.figma,
  },
  {
    name: "React Testing Library",
    description: "DOM-based testing for React components",
    rating: 3,
    icon: Icons.testing, // Use testing icon
  },
  {
    name: "Jest",
    description: "JavaScript testing framework with snapshot testing",
    rating: 3,
    icon: Icons.jest,
  },
  {
    name: "Redux Toolkit",
    description: "Official opinionated Redux setup with best practices",
    rating: 3,
    icon: Icons.redux,
  },
  {
    name: "Zustand",
    description: "Lightweight state management alternative to Redux",
    rating: 4,
    icon: Icons.zustand, // Add if available
  },
  {
    name: "Git & GitHub/GitLab",
    description: "Version control and collaborative development workflows",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "Docker",
    description: "Containerization for consistent development environments",
    rating: 3,
    icon: Icons.docker,
  },
];

export const skills = skillsUnsorted

const sortedSkills = skills
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = sortedSkills.slice(0, 6);