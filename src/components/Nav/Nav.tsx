"use client";

import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const locale = useLocale();
  const t = useTranslations("navigation");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearch = searchParams.toString();
  const searchSuffix = currentSearch ? `?${currentSearch}` : "";

  const languages = ["en", "de", "it"] as const;
  const menu = ["work", "about", "contact"] as const;

  const restPath = pathname.replace(/^\/(en|de|it)/, "") || "/";

  return (
    <header className={styles.headerStyle}>
      <nav className={styles.nav}>
        {/* Language switch – left */}
        <div className={styles.languages}>
          {languages.map((lng) => (
            <Link
              key={lng}
              href={`/${lng}${restPath}${searchSuffix}`}
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
    </header>
  );
}
