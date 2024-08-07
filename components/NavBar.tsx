"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavBar = () => {
  const path = usePathname();
  const router = useRouter();

  return (
    <header className="z-10 w-full">
      <nav className="flex justify-between items-center h-16 bg-[#EE6C23]">
        <a
          href=""
          className="absolute font-sofia tracking-wide text-white text-2xl pl-6"
        >
          Food Diary
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            {path === "/recipe" ? (
              <button className="bg-white bg-opacity-15 w-36 h-8 rounded-[10px] cursor-default">
                <span className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-black">
                  Search Recipes
                </span>
              </button>
            ) : (
              <button
                className="w-36 h-8 rounded-[10px] decoration-white hover:underline active:bg-white active:bg-opacity-15"
                onClick={() => router.push("/recipe")}
              >
                <p className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-medium">
                  Search Recipes
                </p>
              </button>
            )}
          </li>
          <li>
            {path === "/meal-planner" ? (
              <button className="bg-white bg-opacity-15 w-36 h-8 rounded-[10px] cursor-default">
                <span className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-black">
                  Plan your meals
                </span>
              </button>
            ) : (
              <button
                className="w-36 h-8 rounded-[10px] decoration-white hover:underline active:bg-white active:bg-opacity-15"
                onClick={() => router.push("/meal-planner")}
              >
                <p className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-medium">
                  Plan your Meals
                </p>
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
