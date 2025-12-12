import { useTranslations } from "next-intl";
import styles from "../page.module.css"; 
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Home() {
  const t = useTranslations();

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.name}>{t("hero.name")}</h1>
        <div className={styles.role}>{t("hero.role")}</div>
        <p className={styles.description}>{t("hero.desc")}</p>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className="{styles.quoteInner}">
          <p className={styles.quote}>"{t("quote")}"</p>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className={styles.workSection}>
        <div className={styles.workInner}>
          <header className={styles.workHeader}>
            <h2 className={styles.sectionTitle}>{t("work.title")}</h2>
            <p className={styles.sectionIntro}>{t("work.intro")}</p>
          </header>

          <div className={styles.grid}>
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.card}>
                <div className={styles.cardTitleRow}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  {project.year ? (<span className={styles.cardMeta}>{project.year}</span>) : null}
                </div>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </main>
  );
}
