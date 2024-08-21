"use client";

import { recipes } from "@/lib/data";
import { getRecipe } from "@/lib/spoonacular";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Id = () => {
  const router = useRouter();
  const [recipeId, setRecipeId] = useState("");
  const searchParams = useSearchParams();

  const [recipeData, setRecipeData] = useState<any>("");

  useEffect(() => {
    setRecipeId(searchParams.get("id") || "");
  }, []);

  useEffect(() => {
    /* getRecipe(recipeId).then((data) => {
        setRecipeData(data);
    }); */
    setRecipeData(recipes);
  }, [recipeId]);

  return (
    <section className="relative bg-[#FFECE3] bg-opacity-75 w-full h-screen flex justify-center">
      <div className="flex flex-col w-3/5 mt-24 gap-2">
        <div className="flex flex-row gap-16">
          <div
            className="text-3xl cursor-pointer"
            onClick={() => router.push("/recipe")}
          >
            {"<"}
          </div>
          <p className="text-xl font-sofiaPro text-wrap">{recipeData.title}</p>
        </div>
        <div>
          <Image
            className="ml-20 rounded-lg"
            src={recipeData.image}
            width={300}
            height={500}
            alt=""
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Id;
