"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const path = usePathname();

  return (
    <header className="z-10 w-full">
      <nav className="flex justify-between items-center h-16 bg-[#EE6C23]">
        <a href="">Food Diary</a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <button
              className={cn(
                "leading-normal text-lg",
                path == "/recipe" ? "text-gray-300" : "text-white"
              )}
            >
              Search Recipes
            </button>
          </li>
          <li>
            <button
              className={cn(
                "leading-normal text-lg",
                path == "/meal-planner" ? "text-gray-300" : "text-white"
              )}
            >
              Plan your Meals
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
