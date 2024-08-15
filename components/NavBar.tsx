"use client";

import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import Link from "next/link";

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
        <Link
          href="/"
          className="absolute font-sofia tracking-wide text-white text-2xl ml-6"
        >
          Food Diary
        </Link>
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
        <div className="absolute right-0 flex justify-evenly gap-6 mr-6">
          <button
            className="h-8 rounded-[10px] decoration-white hover:underline"
            onClick={() => router.push("/sign-in")}
          >
            <p className="leading-normal text-sm tracking-wide text-white font-normal font-sofiaPro">
              Login
            </p>
          </button>
          <button
            className="flex justify-center items-center bg-white bg-opacity-15 w-24 h-8 rounded-[10px] hover:underline decoration-white active:bg-white active:bg-opacity-50"
            onClick={() => router.push("/sign-up")}
          >
            <span className="leading-normal text-sm tracking-wide text-white font-sofiaPro font-normal">
              Sign Up
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
function useState(arg0: Promise<unknown>): [any, any] {
  throw new Error("Function not implemented.");
}
