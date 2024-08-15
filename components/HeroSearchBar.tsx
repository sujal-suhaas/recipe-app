"use client"

import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";

const HeroSearchBar = () => {
  const [updateText, setUpdateText] = useState("");

  const handleChangeText = (value: string) => {
    setUpdateText(value);
  };

  return (
    <section className="relative flex flex-col">
      <div className="translate-y-2 z-10">
        <h1 className="font-sofiaPro text-2xl font-light">
          Wanna try out a new
          <span className="font-black text-[#EE6C23]"> Dish!!!</span>
        </h1>
        <Image
          src="/Arrow1.svg"
          alt="Arrow directing towards the search bar"
          width={36}
          height={99.33}
        />
      </div>
      <SearchBar changeText={handleChangeText} />
      {updateText != "" ? (
        <div className="z-10 right-0 bottom-0 translate-x-32 translate-y-12 absolute">
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
      ) : null}
    </section>
  );
};

export default HeroSearchBar;
