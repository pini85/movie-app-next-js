import Link from "next/link";
import styles from "./customize.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const Customize = () => {
  return (
    <div className={styles.container}>
      <Link href="/settings">
        <FontAwesomeIcon icon={faCog} />
      </Link>
    </div>
  );
};

export default Customize;
