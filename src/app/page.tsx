import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.name}>Julia Paier</h1>

        <div className={styles.role}>
          UX-minded Web Developer
        </div>

        <p className={styles.description}>
          I build clean, usable interfaces with a focus on structure,
          clarity, and thoughtful interaction.
        </p>

        <div className={styles.actions}>
          <a href="#work" className={styles.primary}>
            View selected work
          </a>
          <a href="#contact" className={styles.secondary}>
            Contact
          </a>
        </div>
      </section>
    </main>
  );
}
