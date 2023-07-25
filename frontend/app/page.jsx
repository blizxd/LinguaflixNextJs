import Image from "next/image";
import { getTvSeries } from "../utils/TMDB.js";
import MovieCard from "@/components/MovieCard.jsx";
import { useQuery } from "@tanstack/react-query";
import MovieList from "@/components/MovieList.jsx";

export default async function Home() {
  const movies = await getTvSeries(1);
  return <MovieList moviesProp={movies}></MovieList>;
}
