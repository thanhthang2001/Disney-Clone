import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import { HrMovieCard } from "../MovieCard/HrMovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MovieCard } from "../MovieCard/MovieCard";

export const MovieList = ({ genreId, index_ }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId)
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        {movieList.map((item, index) => (
          <div key={item.id}>
            <>
              {index_ % 3 == 0 ? (
                <HrMovieCard movie={item} />
              ) : (
                <MovieCard movie={item} />
              )}
            </>
          </div>
        ))}
      </Slider>
    </div>
  );
};
