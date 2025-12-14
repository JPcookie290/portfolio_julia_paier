import { useTranslations, useLocale } from "next-intl";
import styles from "../page.module.css"; 
import { projects } from "@/data/projects";
import Link from "next/link";
import ContactLinks from "@/components/ContactLinks/ContactLinks";


export default function Home() {
  const t = useTranslations();
  const tProjects = useTranslations("projects");
  const locale = useLocale();

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
              <Link key={project.slug} href={`/${locale}/projects/${project.slug}`} className={styles.card}>
                <div className={styles.cardTitleRow}>
                  <h3 className={styles.cardTitle}>{tProjects(`${project.slug}.title`)}</h3>
                  {project.year ? (<span className={styles.cardMeta}>{project.year}</span>) : null}
                </div>
                <p className={styles.cardDesc}>{tProjects(`${project.slug}.description`)}</p>
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

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <h2 className={styles.sectionTitle}>{t("about.title")}</h2>
          <p className={styles.aboutIntro}>{t("about.intro")}</p>
        </div>
     
        <div className={styles.skillsBlock}>
          <h3 className={styles.skillsTitle}>{t("about.skillsTitle")}</h3>

          <div className={styles.skillColumns}>
            {(t.raw("about.skillGroups") as { label: string; items: string[] }[]).map(
              (group) => (
                <div key={group.label} className={styles.skillColumn}>
                  <h4 className={styles.skillColumnTitle}>{group.label}</h4>

                  <ul className={styles.skillList}>
                    {group.items.map((skill) => (
                      <li key={skill} className={styles.skillListItem}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>{t("contact.title")}</h2>
          <p className={styles.contactIntro}>{t("contact.intro")}</p>

          <ContactLinks
            emailUser="julia.paier"
            emailDomain="yahoo.com"
            emailLabel={t("contact.emailLabel")}
            cvLabel={t("contact.cvLabel")}
            githubLabel={t("contact.githubLabel")}
            linkedinLabel={t("contact.linkedinLabel")}
            githubUrl="https://github.com/JPcookie290"
            linkedinUrl="https://www.linkedin.com/in/julia-paier-489362183"
            cvHref="/Lebenslauf_Julia_Paier.pdf"
          />
        </div>
      </section>

    </main>
  );
}
