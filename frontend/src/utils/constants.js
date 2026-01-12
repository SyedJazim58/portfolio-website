// Portfolio data constants
export const PORTFOLIO_DATA = {
  name: "Syed Jazim",
  title: "Full Stack Developer",
  bio: "Passionate about creating innovative web applications with modern technologies. Experienced in building scalable solutions with React, Node.js, and cloud technologies.",
  contactInfo: {
    email: "syedjazim@example.com",
    linkedin: "https://linkedin.com/in/syed-jazim",
    github: "https://github.com/SyedJazim58",
    twitter: "https://twitter.com/syedjazim"
  },
  skills: [
    {
      category: "Frontend",
      items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Redux", "Next.js"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"]
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"]
    }
  ],
  experience: [
    {
      company: "Tech Company Inc.",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: "Lead development of customer-facing applications using React and Node.js. Implemented CI/CD pipelines and improved system performance by 40%."
    },
    {
      company: "Startup Solutions",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality products on schedule."
    },
    {
      company: "Digital Agency",
      position: "Frontend Developer",
      duration: "2018 - 2020",
      description: "Created responsive web applications for various clients. Specialized in React and modern JavaScript frameworks."
    }
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      year: "2014 - 2018"
    }
  ]
};

// GitHub API configuration
export const GITHUB_CONFIG = {
  USERNAME: process.env.REACT_APP_GITHUB_USERNAME || 'SyedJazim58',
  TOKEN: process.env.REACT_APP_GITHUB_TOKEN || null,
  DEFAULT_REPO_COUNT: 4
};

// Application configuration
export const APP_CONFIG = {
  NAME: "Portfolio Website",
  VERSION: "1.0.0",
  LOCALE: "en-US",
  TIMEZONE: "UTC"
};

// API constants
export const API_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
};