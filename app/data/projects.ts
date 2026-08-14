export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  domain: string;
}

export const projects: Project[] = [
  {
    title: "Student P2P Campus Marketplace",
    category: "Full-Stack Web App",
    description:
      "A full-stack marketplace platform allowing university students in Cameroon to safely buy and sell used textbooks and furniture. Features document-upload verification preventing fake account signups by 95% in testing.",
    tech: ["Next.js", "Go", "Tailwind CSS", "PostgreSQL"],
    image: "/project-marketplace.jpg",
    github: "https://github.com/Gambi18/Campus-Marketplace",
    demo: "https://cpmarket.vercel.app/",
    domain: "cpmarket.vercel.app",
  },
  {
    title: "Personal Finance Tracker",
    category: "Data Visualization",
    description:
      "An intuitive dashboard for tracking expenses and budgeting. Features interactive charts and predictive spending analysis using historical data, backed by a Go service handling 500+ entries with zero calculation errors.",
    tech: ["TypeScript", "Next.js", "Go", "SQL"],
    image: "/project-finance.jpg",
    github: "https://github.com/rosesharonanchi/react-tutorial-c5",
    demo: "https://piggy-save-kappa.vercel.app",
    domain: "piggy-save-kappa.vercel.app",
  },
  // {
  //   title: "Brand E-Commerce Website & SEO",
  //   category: "E-Commerce & Optimization",
  //   description:
  //     "A high-performance web platform built for a local brand with an emphasis on responsive design and fast navigation. Implemented technical SEO, metadata, and image optimization to increase organic traffic by 45%.",
  //   tech: ["React.js", "Tailwind CSS", "Vercel"],
  //   image: "/project-ecommerce.jpg",
  //   github: "https://github.com/rosesharonanchi",
  //   demo: "#",
  //   domain: "brandstore.com",
  // },
  {
    title: "Modern Developer Portfolio",
    category: "Full-Stack & UI/UX",
    description:
      "My personal engineering portfolio built with Next.js App Router, React, Tailwind CSS, and Framer Motion. Features dark-mode aesthetics, custom mouse-tracking border glow, smooth scroll animations, and optimized SEO.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    image: "/project-portfolio.jpg",
    github: "https://github.com/rosesharonanchi/My-portfolio",
    demo: "https://portfolio-tau-gules-mfy5mwgd8w.vercel.app/",
    domain: "portfolio-tau-gules-mfy5mwgd8w.vercel.app",
  },
  {
    title: "Interactive Web Quiz App",
    category: "Frontend Web Application",
    description:
      "A sleek, dynamic quiz application featuring automated score evaluation, immediate user feedback on answer selection, and responsive state handling built entirely with core web technologies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/project-quiz.png",
    github: "https://github.com/rosesharonanchi/Quiz-App",
    demo: "https://quiz-app-roan-eight-38.vercel.app/",
    domain: "quiz-app-roan-eight-38.vercel.app",
  },
  
];