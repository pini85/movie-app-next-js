import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import styles from "./styles.module.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
