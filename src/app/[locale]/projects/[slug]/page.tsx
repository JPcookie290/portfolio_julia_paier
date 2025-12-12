import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
//import TechIcons from "@/components/TechIcons/TechIcons";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        {project.year ? (<span className={styles.meta}>{project.year}</span>) : null}
        <p className={styles.desc}>{project.description}</p>
        <div className={styles.tags}>
            {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
            ))}
        </div>
      </header>
      <section className={styles.selection}>
          <h2 className={styles.h2}>Project Details</h2>
          <p className={styles.p}>
              /* TODO: Add Description */
          </p>
      </section>
    </main>
  );
}
