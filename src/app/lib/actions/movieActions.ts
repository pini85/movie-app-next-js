"use server";
import {
  latestMovies,
  highestRatedMovies,
} from "@/constants/movieAPI/movieAPI";
export const getLatestMovies = async (page = 1) => {
  const response = await fetch(latestMovies(page));
  const data = await response.json();
  return data;
};

export const getHighestRatedMovies = async (page = 1) => {
  const response = await fetch(highestRatedMovies(page));
  const data = await response.json();
  return data;
};
