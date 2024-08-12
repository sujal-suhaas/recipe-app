"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SearchBar from "./SearchBar";

type NavBarProps = {
  type: "Home" | "Search";
  searchQuery?: string;
};

const NavBar = ({ type }: NavBarProps) => {
  const path = usePathname();
  const router = useRouter();

  return (
    <header className="absolute z-10 w-full">
      <nav className="relative flex justify-between items-center h-16 bg-[#EE6C23]">
        <a
          href="/"
          className="absolute font-sofia tracking-wide text-white text-2xl pl-6"
        >
          Food Diary
        </a>
        {type === "Home" ? (
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            <li>
              {path === "/recipe" ? (
                <button className="flex justify-center items-center bg-white bg-opacity-15 w-36 h-8 rounded-[10px] cursor-default">
                  <span className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-bold">
                    Search Recipes
                  </span>
                </button>
              ) : (
                <button
                  className="w-36 h-8 rounded-[10px] decoration-white hover:underline active:bg-white active:bg-opacity-15"
                  onClick={() => router.push("/recipe")}
                >
                  <p className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-normal">
                    Search Recipes
                  </p>
                </button>
              )}
            </li>
            <li>
              {path === "/meal-planner" ? (
                <button className="flex justify-center items-center bg-white bg-opacity-15 w-36 h-8 rounded-[10px] cursor-default">
                  <span className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-bold">
                    Plan your meals
                  </span>
                </button>
              ) : (
                <button
                  className="w-36 h-8 rounded-[10px] decoration-white hover:underline active:bg-white active:bg-opacity-15"
                  onClick={() => router.push("/meal-planner")}
                >
                  <p className="leading-normal text-sm tracking-wide text-white font-normal font-sofiaPro">
                    Plan your meals
                  </p>
                </button>
              )}
            </li>
          </ul>
        ) : null}

        {type === "Search" ? (
          <div className="flex-1 flex justify-center items-center max-lg:hidden">
            <SearchBar changeText={() => {}} />
          </div>
        ) : null}
        <div className="absolute right-0">
          <button className="mr-6 rounded-full hover:bg-white hover:bg-opacity-15">
            user
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
