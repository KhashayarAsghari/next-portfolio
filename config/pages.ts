import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Khashayar Asghari's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Khashayar Asghari's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Khashayar Asghari's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Khashayar Asghari.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description:
        "Khashayar Asghari's open-source contributions and community involvement.",
    },
  },
  resume: {
    title: "Resume",
    description: "Khashayar Asghari's resume.",
    metadata: {
      title: "Resume",
      description: "Khashayar Asghari's resume.",
    },
  },
  career: {
    title: "Career Timeline",
    description: "Professional journey and experience timeline.",
    metadata: {
      title: "Career Timeline",
      description: "Khashayar Asghari's professional journey and career timeline.",
    },
  },
};
