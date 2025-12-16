"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./LightboxGallery.module.css";

type GalleryImage = {
  src: string;
  alt: string;
  captionKey: string;
  kind?: "ui" | "code" | "gameplay";
};

export default function LightboxGallery({
  images,
  projectSlug,
}: {
  images: GalleryImage[];
  projectSlug: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tProject = useTranslations(`projects.${projectSlug}`);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (openIndex === null) return;

      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
      }

      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, images.length]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((img, idx) => (
          <figure key={img.src} className={styles.item}>
            <button
              type="button"
              className={styles.thumbBtn}
              onClick={() => setOpenIndex(idx)}
              aria-label={`Open image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={800}
                className={styles.thumbImg}
              />
            </button>

            <figcaption
              className={`${styles.caption} ${
                img.kind === "code" ? styles.codeCaption : ""
              }`}
            >
              {tProject(`images.${img.captionKey}`)}
            </figcaption>
          </figure>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenIndex(null)}
        >
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <div className={styles.stage}>
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].alt}
                width={1800}
                height={1200}
                className={styles.fullImg}
                priority
              />
            </div>

            <div className={styles.fullCaption}>
              {tProject(`images.${images[openIndex].captionKey}`)}
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() =>
                  setOpenIndex((i) =>
                    i === null ? null : (i - 1 + images.length) % images.length
                  )
                }
              >
                ←
              </button>

              <button
                type="button"
                className={styles.navBtn}
                onClick={() =>
                  setOpenIndex((i) =>
                    i === null ? null : (i + 1) % images.length
                  )
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
