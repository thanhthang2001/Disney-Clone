import React from "react";
import { genres } from "../../Constant/GeneresList";
import { MovieList } from "../MovieList/MovieList";
export const GenresMovieList = () => {
  return (
    <div>
      {genres.map((item, index) => (
        <div key={item.id} className=" p-7 md:px-16">
          <h2 className="font-bold text-xl ">{item.name}</h2>
          <MovieList genreId={item.id} index_={index} />
        </div>
      ))}
    </div>
  );
};
