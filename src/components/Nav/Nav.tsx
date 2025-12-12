import Link from "next/link";
import {useLocale} from "next-intl";
import styles from "./Nav.module.css";

export default function Nav() {
  const locale = useLocale();

  const languages = ["en", "de", "it"] as const;
  const menu = ["work", "about", "contact"] as const;

  return (
    <nav className={styles.nav}>
      {/* Language switch – left */}
      <div className={styles.languages}>
        {languages.map((lng) => (
          <Link
            key={lng}
            href={`/${lng}`}
            className={lng === locale ? styles.active : ""}
          >
            {lng.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* Menu – right */}
      <div className={styles.menu}>
        {menu.map((item) => (
          <a key={item} href={`#${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}
