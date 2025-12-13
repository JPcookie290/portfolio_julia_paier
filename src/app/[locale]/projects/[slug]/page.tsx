import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "../project.module.css";
import Image from "next/image";
import Link from "next/link";
import TechIcons from "@/components/TechIcons/TechIcons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.wrap}>
      <div className={styles.topBar}>
        <Link href="/#work" className={styles.backLink} aria-label="Back to selected works">
          <span className={styles.backArrow}>←</span>
          Back to works
        </Link>
        <div className={styles.links}>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.linkBtn}>
              GitHub
            </a>
          ) : null}

          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.linkBtnPrimary}>
              Demo
            </a>
          ) : null}
        </div>
      </div>
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

      <section className={styles.section}>
        <h2 className={styles.h2}>Project details</h2>
        <ul className={styles.list}>
          {project.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {project.images?.length ? (
        <section className={styles.section}>
          <h2 className={styles.h2}>Images</h2>
          <div className={styles.gallery}>
            {project.images.map((img) => (
              <figure key={img.src} className={styles.figure}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className={styles.galleryImg}
                />
                {img.caption ? <figcaption className={styles.caption}>{img.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
