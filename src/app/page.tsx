import ButtonTab from "@/components/ButtonTab/ButtonTab";
import ButtonTabGroup from "@/app/components/ButtonTabGroup/ButtonTabGroup";
import styles from "./page.module.css";
import {
  highestRatedMovies,
  latestMovies,
} from "@/constants/movieAPI/movieAPI";
import DisplayMovies from "./components/DisplayMovies/DisplayMovies";

export default async function Page() {
  //   export default async function Page({
  //   searchParams,
  // }: {
  //   searchParams?: {
  //     query?: string;
  //   };
  // }) {
  //   const query = searchParams?.query || "";
  //   console.log("im here", { query });
  //   const getLatestMovies =
  //     query === "latestmovies" ? latestMovies() : highestRatedMovies();

  return (
    <main className={styles.container}>
      <ButtonTabGroup />
      <div className={styles.hero}>
        <div>Carousel</div>
        <h1 className={styles.home__header}>Welcome to Pini Movies</h1>
        <h2 className={styles.home__secondary}>Discover and watch</h2>
      </div>
    </main>
  );
}
