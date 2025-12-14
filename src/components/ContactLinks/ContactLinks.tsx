"use client";

import styles from "./ContactLinks.module.css";

type Props = {
  emailUser: string;   // e.g. "yourname"
  emailDomain: string; // e.g. "domain.com"
  emailLabel: string;  // translated label
  cvLabel: string;     // translated label
  githubLabel: string;
  linkedinLabel: string;
  githubUrl: string;
  linkedinUrl: string;
  cvHref: string;     // link to CV file
};

export default function ContactLinks(props: Props) {
  const email = `${props.emailUser}@${props.emailDomain}`;

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.row}>
      <button type="button" className={styles.linkBtn} onClick={handleEmail}>
        {props.emailLabel}
      </button>

      <a className={styles.linkBtn} href={props.cvHref} download>
        {props.cvLabel}
      </a>

      <a className={styles.linkBtn} href={props.githubUrl} target="_blank" rel="noreferrer noopener">
        {props.githubLabel}
      </a>

      <a className={styles.linkBtn} href={props.linkedinUrl} target="_blank" rel="noreferrer noopener">
        {props.linkedinLabel}
      </a>
    </div>
  );
}
