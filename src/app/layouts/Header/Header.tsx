import Hamburger from "@/components/Hamburger/Hamburger";
import { myAction, myOtherAction } from "@/actions/myAction";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Hamburger />
          </li>
          {/* <li>
            <div>Saved</div>
          </li>
          <li>
            <div>Login Button</div>
          </li> */}
        </ul>
      </nav>
      <div>
        <div>Customize</div>
        <div>Light Switch</div>
        <div>Search</div>
      </div>
    </header>
  );
};
export default Header;
