import styles from "./card.module.css";
import React, { FC } from "react";
import { CardProps } from "./Card.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Card: FC<CardProps> = ({ movie }) => {
  const image = () => {
    if (movie.poster_path === null) {
      return "https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg";
    } else {
      return `https://image.tmdb.org/t/p/w185//${movie.poster_path}`;
    }
  };
  const imageStyle = {
    backgroundImage: `url(${image()})`,
  };
  const modifyTitle = (name: string) => {
    if (name.length > 17) {
      return name.slice(0, 16) + "...";
    }
    return name;
  };
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]} style={imageStyle}>
          <div className={styles["year"]}>
            {movie.release_date ? movie.release_date.substr(0, 4) : "N/A"}
          </div>
          <div className={styles["rating"]}>
            <div className={styles["icon-wrapper"]}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            {Number(movie.vote_average).toFixed(1)}
          </div>
          <div className={styles["title-front"]}>
            {modifyTitle(movie.title)}
          </div>
        </div>
        <div className={styles["card-back"]} style={imageStyle}>
          <div className={styles["gradient"]}>
            <div className={styles["button-container"]}>
              <button>Details</button>
              <button>Watch</button>
              {/* <Button title="Details" handleClick={handleNavigation} />
              <Button title="Watch" handleClick={handleWatch} /> */}
            </div>
          </div>
          {/* {user && <SaveMovie movie={movie} isSaved={isSaved} />} */}
          <div className={styles["title-back"]}>{modifyTitle(movie.title)}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
