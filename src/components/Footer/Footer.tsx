import { useTranslations } from "next-intl";
import styles from "./Footer.module.css"; 

export default function Footer() {
  const t = useTranslations();

  return (
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© 2025 · {t("footer.rights")}</span>
          <span>{t("footer.madeBy")}</span>
        </div>
      </footer>
  );
}
