"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getTvSeries } from "@/utils/TMDB";
const MovieList = ({ moviesProp }) => {
  const [movies, setMovies] = useState(moviesProp.results);
  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        await fetchNextPage();
      }
    });
    observer.observe(document.querySelector("#endOfList"));
  }, []);
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam = 1 }) => {
      return getTvSeries(pageParam);
    },
    getNextPageParam: (lastPage, pages) => lastPage.page + 1,
  });
  useEffect(() => {
    if (data) {
      // Assign the data to the movies state
      setMovies(data.pages.flatMap((page) => page.results));
      console.log(hasNextPage);
    }
  }, [data]);
  return (
    <div className="movie-list">
      {movies.map((m) => (
        <MovieCard
          movie={m}
          key={m.id}
        ></MovieCard>
      ))}
      <div
        id="endOfList"
        className="col-span-full"
      >
        {isFetchingNextPage && (
          <div className="text-2xl text-center ">
            <strong>Loading more...</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
