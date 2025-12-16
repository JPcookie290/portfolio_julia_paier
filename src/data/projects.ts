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
  },
  {
    slug: "battle-ship-java",
    year: "2024",
    tags: [
      "Java",
      "OOP",
      "Game Development",
      "GUI",
      "Single Player",
      "Turn-Based",
      "Classic Game",
      "Desktop App"
    ],
    tech: ["Java"],
    githubUrl: "https://github.com/JPcookie290/BattleShip_Java",
    coverImage: { src: "/projects/battleship/main_img.png", alt: "Battle Ship game cover" },
    images: [
      { src: "/projects/battleship/img1.png", alt: "Battle Ship game screenshot 1" },
      { src: "/projects/battleship/img2.png", alt: "Battle Ship game screenshot 2" },
      { src: "/projects/battleship/code_structure.png", alt: "Code structure and class diagram" }
    ]
  }
];
