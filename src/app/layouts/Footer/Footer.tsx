import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__text}>Powered by</span>
      <Image width={100} height={50} src="/tmdb-logo.png" alt="tmdb logo" />
    </footer>
  );
};
export default Footer;
