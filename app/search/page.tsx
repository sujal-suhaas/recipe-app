"use client";

import SearchPage from "@/components/SearchPage";
import { Suspense } from "react";

const Search = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
};

export default Search;
