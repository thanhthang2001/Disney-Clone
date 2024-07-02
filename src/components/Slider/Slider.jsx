import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export const MovieSlider = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = async () => {
    try {
      const resp = await GlobalApi.getTrendingVideos();
      setMovieList(resp.data.results);
    } catch (error) {
      setError("Error fetching trending movies.");
      console.error("Error fetching trending movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  if (loading) {
    return <div className="text-white px-16 py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 px-16 py-4">{error}</div>;
  }

  return (
    <div className="relative md:px-10 py-4">
      <Slider {...settings}>
        {movieList.map((item) => (
          <div key={item.id} className="outline-none">
            <div className="relative">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                alt={item.title || "Movie image"}
                className="w-full h-[310px] object-cover object-left-top rounded-md"
              />
              <h3 className="absolute bottom-0 left-0 right-0  text-white font-bold text-xl p-2 text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
