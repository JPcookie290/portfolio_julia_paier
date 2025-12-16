export type Project = {
  slug: string;
  year?: string;
  tags: string[];
  tech?: string[];
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: { src: string; alt: string };
  images?: { src: string; alt: string; captionKey: string; kind?: "ui" | "code" | "gameplay"; }[];
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
      "GUI",
      "Single Player",
      "Desktop App"
    ],
    tech: ["Java"],
    githubUrl: "https://github.com/JPcookie290/BattleShip_Java",
    coverImage: { src: "/projects/battleship/main_img.png", alt: "Battle Ship game cover" },
    images: [
      { src: "/projects/battleship/start_screen.png", 
        alt: "Start Screen", 
        captionKey: "startScreen", 
        kind: "ui" },
      { src: "/projects/battleship/gameplay_view.png", 
        alt: "Game play Grid View", 
        captionKey: "gameplay", 
        kind: "ui" },
      { src: "/projects/battleship/game_controller.png", 
        alt: "Code structure beginning of the gameController class", 
        captionKey: "gameController", 
        kind: "code" },
      { src: "/projects/battleship/computer_shot.png", 
        alt: "Code Example of the Computer's shot logic", 
        captionKey: "computerShot", 
        kind: "code" }
    ]
  }
];
