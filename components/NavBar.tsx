"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <header className="z-10 w-full">
      <nav className="flex justify-between items-center max-container bg-orange-500">
        <a href="">Logo</a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a
              href="/recipe"
              className={cn(
                "leading-normal text-lg",
                path == "/recipe" ? "text-gray-300" : "text-white"
              )}
            >
              Search Recipes
            </a>
          </li>
          <li>
            <a
              href="/meal-planner"
              className={cn(
                "leading-normal text-lg",
                path == "/meal-planner" ? "text-gray-300" : "text-white"
              )}
            >
              Plan your Meals
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
