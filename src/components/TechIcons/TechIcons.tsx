import styles from "./TechIcons.module.css";

const ICONS: Record<string, string> = {
  React: "⚛︎",
  TypeScript: "TS",
  "CSS Modules": "CSS",
  Nextjs: "N",
  "Next.js": "N",
  JavaScript: "JS",
  SwiftUI: "S",
  Java: "J",
};

export default function TechIcons({ tech }: { tech: string[] }) {
  return (
    <div className={styles.row}>
      {tech.map((t) => (
        <span key={t} className={styles.badge} title={t} aria-label={t}>
          <span className={styles.icon}>{ICONS[t] ?? "•"}</span>
          <span className={styles.label}>{t}</span>
        </span>
      ))}
    </div>
  );
}
