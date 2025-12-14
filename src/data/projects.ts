export type Project = {
  slug: string;
  year?: string;
  tags: string[];
  tech?: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: { src: string; alt: string };
  images?: { src: string; alt: string; captionKey?: string }[];
};

export const projects: Project[] = [
  {
    slug: "memory-game",
    year: "2024",
    tags: ["TypeScript", "React", "Vite", "UI/UX"],
    tech: ["React", "TypeScript", "Vite", "CSS Modules"],
    githubUrl: "https://github.com/JPcookie290/memory-game",
    demoUrl: "https://memory-game-sage-nine.vercel.app",
    coverImage: { src: "/projects/memory/main_img.png", alt: "Memory game cover" }
  }
];
