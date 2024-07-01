import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

export const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < movieList.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [movieList]);

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

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : movieList.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < movieList.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (loading) {
    return <div className="text-white px-16 py-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 px-16 py-4">{error}</div>;
  }

  return (
    <div className="relative">
      <div className="text-white flex overflow-hidden w-full md:px-10 py-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movieList.map((item) => (
            <div key={item.id} className="flex-none w-full md:px-3">
              <img
                src={IMAGE_BASE_URL + item.backdrop_path}
                alt={item.title || "Movie image"}
                className="w-full h-[310px] object-cover object-left-top rounded-md hover:border-[4px] border-gray-500"
              />
              <h3 className="mt-2 text-center items-center justify-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 md:left-7 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-[6px] rounded-full focus:outline-none hover:bg-slate-300/70"
      >
        &lt;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 md:right-7 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-[6px] rounded-full focus:outline-none hover:bg-slate-300/70"
      >
        &gt;
      </button>
    </div>
  );
};
