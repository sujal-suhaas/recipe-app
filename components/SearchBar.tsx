"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import AutoComplete from "./AutoComplete";

interface SerarchBarProps {
  changeText: (value: string) => void;
}

const SearchBar = ({ changeText }: SerarchBarProps) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const searchParams = useSearchParams();

  const [autoCompleteVisibility, setAutocompleteVisibility] = useState(false);

  useEffect(() => {
    setValue(searchParams.get("query") || "");
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?query=${value}`);
    setAutocompleteVisibility(false);
  };

  useEffect(() => {
    changeText(value);

    if (value != "") {
      if (searchParams.get("query") === value) {
        setAutocompleteVisibility(false);
      } else {
        setAutocompleteVisibility(true);
      }
    } else {
      setAutocompleteVisibility(false);
    }
  }, [value, changeText]);

  return (
    <div className="flex flex-col">
      <div className="relative flex flex-row">
        <input
          type="text"
          className="font-sofiaPro text-xs font-light w-80 h-11 p-5 rounded-[14px]"
          value={value}
          placeholder="Search what you want to make"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="absolute place-items-center right-5 top-2/4 -translate-y-2/4 grid z-9"
          onClick={handleSearch}
        >
          <svg
            className={cn(value != "" ? "fill-black" : "fill-gray-400")}
            width="20"
            height="20"
            viewBox="0 0 30 30"
          >
            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
          </svg>
        </button>
      </div>
      <AutoComplete value={value} visible={autoCompleteVisibility} />
    </div>
  );
};

export default SearchBar;
