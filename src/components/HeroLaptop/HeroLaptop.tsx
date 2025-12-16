import  styles  from "./HeroLaptop.module.css";

export default function HeroLaptop() {
  return (
    
    <svg
      viewBox="0 0 520 340"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.heroLaptop}
      aria-hidden="true"
    >
      {/* OUTER STRUCTURE */}
      <g className={styles.outer} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 70 Q90 50 110 50 H340 Q360 50 360 70 V210 Q360 230 340 230 H110 Q90 230 90 210 Z" />
        <path d="M120 240 H330" />
        <path d="M70 250 H380 Q410 250 395 275 L365 320 H85 L55 275 Q40 250 70 250 Z" />
      </g>

      {/* INNER SCRIBBLES */}
      <g className={styles.inner} fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M120 95 C170 80, 220 110, 300 90" />
        <path d="M120 125 C180 115, 240 145, 310 125" />
        <path d="M120 155 C190 150, 250 175, 300 165" />
        <path d="M120 185 C170 175, 220 200, 280 190" />
        <path d="M130 270 C190 260, 260 260, 330 270" />
      </g>
    </svg>
  );
}
