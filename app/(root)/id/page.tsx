"use client";

import RecipePage from "@/components/RecipePage";
import { Suspense } from "react";

const Id = () => {
  return (
    <section className="relative bg-[#FFECE3] bg-opacity-75 w-full h-full min-h-screen flex flex-col items-center pb-5">
      <Suspense fallback={<div>Loading...</div>}>
        <RecipePage />
      </Suspense>
    </section>
  );
};

export default Id;
