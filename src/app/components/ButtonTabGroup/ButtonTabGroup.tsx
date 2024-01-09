"use client";
import React, { useTransition, useEffect, useState, FC } from "react";
import {
  getHighestRatedMovies,
  getLatestMovies,
} from "@/app/lib/actions/movieActions";
import styles from "./buttonTabGroup.module.css";
import ButtonTab from "@/components/ButtonTab/ButtonTab";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import DisplayMovies from "../DisplayMovies/DisplayMovies";
const ButtonTabGroups = () => {
  const [isPending, startTransition] = useTransition();
  const [active, setActive] = useState("latestMovies");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getLatestMovies();
      setActive("latestMovies");
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  const getMovies = (type: string) => {
    if (type === "latestMovies") {
      startTransition(async () => {
        const movies = await getLatestMovies();
        setMovies(movies);
        setActive("latestMovies");
      });
    } else {
      startTransition(async () => {
        const movies = await getHighestRatedMovies();
        setMovies(movies);
        setActive("highestRatedMovies");
        console.log({ movies });
      });
    }
  };
  return (
    <div>
      <div>
        <ButtonTab
          callBack={() => getMovies("latestMovies")}
          isActive={active === "latestMovies"}
        >
          latest movies
        </ButtonTab>
        <ButtonTab
          callBack={() => getMovies("highestRatedMovies")}
          isActive={active === "highestRatedMovies"}
        >
          highest rating
        </ButtonTab>
      </div>
      <DisplayMovies movies={movies} />
    </div>
  );
  // const [count, setCount] = React.useState(0);
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();
  // const changeParams = (query: string) => {
  //   const x = Math.random();
  //   console.log("in function", { query });
  //   const params = new URLSearchParams(searchParams);
  //   params.set("query", `query${x}`);
  //   replace(`${pathname}?${params.toString()}`);
  // };

  // const currentQuery = searchParams.get("query");
  // return (
  //   <div>
  //     <ButtonTab
  //       callBack={() => changeParams("latestmovies")}
  //       isActive={currentQuery === "latestmovies"}
  //     >
  //       latest movies
  //     </ButtonTab>
  //     <ButtonTab
  //       callBack={() => changeParams("highestrating")}
  //       isActive={currentQuery === "highestrating"}
  //     >
  //       highest rating
  //     </ButtonTab>
  //   </div>
  // );
};

export default ButtonTabGroups;
