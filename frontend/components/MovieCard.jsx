import React from "react";
import Image from "next/image";
import { FaCirclePlay, FaStar } from "react-icons/fa6";
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card group ">
      <div className="relative">
        <Image
          src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
          alt={`${movie.original_name} poster`}
          height={500}
          width={500}
          className="w-full h-auto group-hover:backdrop-blur-md backdrop-filter"
        ></Image>
        <div className="group-hover:backdrop-blur-md transition duration-300 absolute top-0 left-0 bg-white group-hover:bg-opacity-20 bg-opacity-0 h-full w-full select-none"></div>
        <FaCirclePlay
          size="3rem"
          className="group-hover:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-between w-full px-1 mt-2 gap-1 flex-grow">
        <b className="">{movie.name}</b>
        <b className="flex-shrink-0 ">
          {movie.vote_average}
          <FaStar className="inline ml-2 text-yellow-400"></FaStar>
        </b>
      </div>
      <button className="add-to-watchlist">Add to watchlist</button>
    </div>
  );
};

export default MovieCard;
