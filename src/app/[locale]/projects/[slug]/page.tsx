import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";
import TechIcons from "@/components/TechIcons/TechIcons";
import { getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  // ✅ Server-safe translations (no hooks)
  const tNav = await getTranslations("navigation");
  const tSection = await getTranslations("projectsSection");
  const tProject = await getTranslations(`projects.${slug}`);

  const details = tProject.raw("details") as string[];

  return (
    <main className={styles.wrap}>
      <div className={styles.topBar}>
        <Link href="../#work" className={styles.backLink}>
          <span className={styles.backArrow}>←</span>
          Back to work
        </Link>

        <div className={styles.actionLinks}>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.actionLink}
            >
              GitHub
            </a>
          ) : null}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={styles.actionLinkPrimary}
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>

      <header className={styles.projectHeader}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{tProject("title")}</h1>
          {project.year ? <p className={styles.year}>{project.year}</p> : null}
        </div>

        <p className={styles.desc}>{tProject("overview")}</p>
      </header>


      {project.coverImage ? (
        <figure className={styles.cover}>
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            width={1400}
            height={900}
            className={styles.coverImg}
            priority
          />
        </figure>
      ) : null}

      <section className={styles.detailsSection}>
        <div className={styles.detailsInner}>
          <h2 className={styles.h2}>{tSection("detailsTitle")}</h2>

          <ul className={styles.list}>
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.tech?.length ? (
        <section className={styles.techSection}>
          <div className={styles.techInner}>
            <TechIcons tech={project.tech} />
          </div>
        </section>
      ) : null}


      {project.images?.length ? (
        <section className={styles.section}>
          <h2 className={styles.h2}>{tSection("imagesTitle")}</h2>
          <div className={styles.gallery}>
            {project.images.map((img) => (
              <figure key={img.src} className={styles.figure}>
                <Image src={img.src} alt={img.alt} width={1200} height={800} className={styles.galleryImg} />
                {img.captionKey ? (
                  <figcaption className={styles.caption}>
                    {tProject(`images.${img.captionKey}`)}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
