import React from "react";
import Disney from "../../assets/img/Disney.png";
import Marvel from "../../assets/img/Marvel.png";
import National from "../../assets/img/National.png";
import Pixar from "../../assets/img/Pixar.png";
import StarWars from "../../assets/img/StarWars.png";

import DisneyV from "../../assets/img/DisneyV.mp4";
import MarvelV from "../../assets/img/MarvelV.mp4";
import NationalV from "../../assets/img/NationalV.mp4";
import PixarV from "../../assets/img/PixarV.mp4";
import StarWarsV from "../../assets/img/StarWarsV.mp4";

export const ProductionHouse = () => {
  const ProductionHouseList = [
    {
      id: 1,
      image: Disney,
      video: DisneyV,
    },
    {
      id: 2,
      image: Disney,
      video: MarvelV,
    },
    {
      id: 3,
      image: Disney,
      video: NationalV,
    },
    {
      id: 4,
      image: Disney,
      video: PixarV,
    },
    {
      id: 5,
      image: Disney,
      video: StarWarsV,
    },
  ];
  return (
    <div className="flex md:gap-5 md:p-2 md:px-16">
      {ProductionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-gray-800"
        >
          <img
            src={item.image}
            alt=""
            className="w-full h-full object-cover z-10"
          />
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  );
};
