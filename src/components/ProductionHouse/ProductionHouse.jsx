import React from "react";
import logo from "../../assets/img/logo.png";
import Marvel from "../../assets/img/Marvel.png";
import National from "../../assets/img/National.png";
import Pixar from "../../assets/img/Pixar.png";
import StarWars from "../../assets/img/StarWars.png";

import Disney from "../../assets/img/Disney.mp4";
import MarvelV from "../../assets/img/MarvelV.mp4";
import NationalV from "../../assets/img/NationalV.mp4";
import PixarV from "../../assets/img/PixarV.mp4";
import StarWarsV from "../../assets/img/StarWarsV.mp4";

export const ProductionHouse = () => {
  const ProductionHouseList = [
    {
      id: 1,
      image: logo,
      video: Disney,
    },
    {
      id: 2,
      image: Marvel,
      video: MarvelV,
    },
    {
      id: 1,
      image: National,
      video: NationalV,
    },
    {
      id: 1,
      image: Pixar,
      video: PixarV,
    },
    {
      id: 1,
      image: StarWars,
      video: StarWarsV,
    },
  ];
  return (
    <div className="flex">
      {ProductionHouseList.map((item) => (
        <div>
          <img src={item.image} alt="" className="w-full bg-white" />
        </div>
      ))}
    </div>
  );
};
