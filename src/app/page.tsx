import ButtonTab from "@/components/ButtonTab/ButtonTab";
import styles from "./page.module.css";

export default function Home() {
  // const getCarouselMovies = await foo();
  // const getMovies = await bar();
  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <div>Carousel</div>
        <h1 className={styles.home__header}>Welcome to Pini Movies</h1>
        <h2 className={styles.home__secondary}>Discover and watch</h2>
        <ButtonTab />
      </div>
      {/* <DisplayMovies movies={[]}/> */}
    </main>
  );
}
