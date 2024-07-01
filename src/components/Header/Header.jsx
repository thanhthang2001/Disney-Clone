import logo from "@/assets/img/logo.png";
import React, { useState } from "react";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import { HiHome, HiMiniMagnifyingGlass, HiStar, HiTv } from "react-icons/hi2";
import { RiMovie2Fill } from "react-icons/ri";
import HeaderItem from "./HeaderItem";
export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMiniMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIE",
      icon: RiMovie2Fill,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center  justify-between p-5">
      <div className="flex gap-8 items-center">
        <img src={logo} alt="logo" className="w-20 md:w-28 object-cover" />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute mt-3 bg-gray-700 border-[1px] px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        className="w-10 rounded-full"
        src="src/assets/img/avatar.png"
        alt="avatar"
      />
    </div>
  );
};
