import React, { FC } from "react";
import styles from "./displayMovies.module.css";
import { DisplayMoviesProps } from "./DisplayMovies.types";
import Card from "../Card/Card";
const DisplayMovies: FC<DisplayMoviesProps> = ({ movies }) => {
  console.log({ movies });
  return (
    <div className={styles.container}>
      {movies?.results?.map((movie: any) => {
        return <Card key={movie.name} movie={movie} />;
      })}
    </div>
  );
};
export default DisplayMovies;
