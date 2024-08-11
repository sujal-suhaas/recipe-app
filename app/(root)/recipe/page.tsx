"use client";

import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React, { useState } from "react";

const RecipeApp = () => {
  const [mainText, setMainText] = useState("Dish!!!");
  const [value, setValue] = useState("");

  function handleValue(data: string) {
    console.log(data);
    setValue(data);
  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#FFECE3] bg-opacity-75">
      <div className="relative flex flex-col">
        <div>
          <h1 className="font-sofiaPro text-2xl font-light">
            Wanna try out a new
            <span className="font-black text-[#EE6C23]"> {mainText}</span>
          </h1>
        </div>
        <Image
          className="z-10"
          src="/Arrow1.svg"
          alt="Arrow directing towards the search bar"
          width={36}
          height={99.33}
        />
        <SearchBar text={() => handleValue} />
        {value == "" ? null : (
          <div className="z-10 absolute">
            <Image
              src="/Arrow2.svg"
              alt="Arrow directing towards the text"
              width={40}
              height={47.69}
            />
            <p className="font-sofiaPro font-light text-xs">
              Click here to continue search
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecipeApp;
