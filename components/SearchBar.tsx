import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SearchBar = () => {
  const [value, setValue] = useState("");

  function handleChange(e: {
    preventDefault: () => void;
    target: { value: React.SetStateAction<string> };
  }) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return (
    <div className="relative flex flex-row -translate-y-2">
      <button className="absolute place-items-center right-6 top-2/4 -translate-y-2/4 grid z-9">
        <svg
          className={cn(value != "" ? "fill-black" : "fill-gray-400")}
          width="20"
          height="20"
          viewBox="0 0 30 30"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
        </svg>
      </button>
      <input
        className="font-sofiaPro text-xs font-light w-80 h-11 p-6 rounded-[14px]"
        placeholder="Search what you want to make"
        type="text"
        onChange={handleChange}
        onClick={() => setValue("")}
      />
    </div>
  );
};

export default SearchBar;
