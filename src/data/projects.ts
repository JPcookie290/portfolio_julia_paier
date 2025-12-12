export type Project = {
  slug: string;
  title: string;
  year?: string;
  description: string;
  overview: string;
  details: string[];
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: { src: string; alt: string };
  images?: { src: string; alt: string; caption?: string }[];
  tech?: string[]; // used for icons + labels
};

export const projects: Project[] = [
  {
    slug: "memory-game",
    title: "Memory Game",
    year: "2025",
    description: "A browser-based memory game focused on clarity, feedback and accessibility.",
    overview:
      "I built a fast, accessible memory game with clear interaction feedback and a clean UI. The goal was to keep gameplay intuitive while making state changes and animations feel consistent.",
    details: [
      "Designed a simple, readable UI with clear feedback states.",
      "Implemented game logic with predictable state transitions.",
      "Focused on keyboard accessibility and responsive layout."
    ],
    tags: ["React", "Vite", "UI/UX"],
    githubUrl: "https://github.com/yourname/yourrepo",
    demoUrl: undefined, // add later if available
    coverImage: { src: "/projects/memory/cover.png", alt: "Memory game cover" },
    images: [
      { src: "/projects/memory/screen-1.png", alt: "Gameplay screen", caption: "Main gameplay UI" },
      { src: "/projects/memory/screen-2.png", alt: "End screen", caption: "End state with score" }
    ],
    tech: ["React", "TypeScript", "CSS Modules"]
  }
];
