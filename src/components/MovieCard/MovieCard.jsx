import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
export const MovieCard = ({ movie }) => {
  return (
    <div className="py-[20px] px-[12px]">
      <img
        className=" rounded-lg hover:border-[3px] border-gray-500 hover:scale-110 transition-all duration-150 ease-in"
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
      />
    </div>
  );
};
