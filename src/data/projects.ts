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
    year: "2025",
    tags: ["React", "UI/UX"],
    tech: ["React", "TypeScript", "CSS Modules"],
    githubUrl: "https://github.com/yourname/memory-game",
    coverImage: { src: "/projects/memory/cover.png", alt: "Memory game cover" },
    images: [
      { src: "/projects/memory/screen-1.png", alt: "Gameplay screen", captionKey: "gameplay" }
    ]
  },

  {
    slug: "swiftui-habit-tracker",
    year: "2025",
    tags: ["SwiftUI", "Product thinking"],
    tech: ["SwiftUI"],
    githubUrl: "https://github.com/yourname/habit-tracker"
  }
];
