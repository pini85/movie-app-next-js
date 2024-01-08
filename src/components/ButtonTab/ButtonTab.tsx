import styles from "./buttonTab.module.css";
const ButtonTab = ({ isActive, children }) => {
  return <button className={styles.button}>{children}</button>;
};
export default ButtonTab;
