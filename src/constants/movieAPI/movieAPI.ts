import { dateMonthsBack } from "@/utils/date";
const apiKey = process.env.tmdb_api_key;
export const latestMovies = (page = 1) => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&region=US&&language=en-US&sort_by=release_date.desc&sort_by=vote_count.desc&primary_release_date.gte=${dateMonthsBack(
    2
  )}&primary_release_date.lte=${dateMonthsBack(1)}&page=${page}`;
};

export const highestRatedMovies = (page = 1) => {
  return `
  https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&vote_average.desc&vote_count.gte=1000&include_adult=false&include_video=false&page=${page}`;
};
