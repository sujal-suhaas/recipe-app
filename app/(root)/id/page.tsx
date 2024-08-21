"use client";

import { recipes } from "@/lib/data";
import { getRecipe } from "@/lib/spoonacular";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bookmark, Soup, Timer } from "lucide-react";

const Id = () => {
  const router = useRouter();
  const [recipeId, setRecipeId] = useState("");
  const searchParams = useSearchParams();

  const [recipeData, setRecipeData] = useState<any>("");

  const [savedIcon, setSavedIcon] = useState(false);
  const [savedText, setSavedText] = useState(false);

  useEffect(() => {
    setRecipeId(searchParams.get("id") || "");
  }, []);

  useEffect(() => {
    /* getRecipe(recipeId).then((data) => {
        setRecipeData(data);
    }); */
    setRecipeData(recipes);
  }, [recipeId]);

  const handleSavedHoverIn = () => {
    if (!savedIcon) {
      setSavedIcon(true);
    }
  };

  const handleSavedHoverOut = () => {
    if (savedIcon) {
      setSavedIcon(false);
    }
  };

  const saveRecipe = () => {
    if (!savedText) {
      setSavedText(true);
    }
  };

  return (
    <section className="relative bg-[#FFECE3] bg-opacity-75 w-full h-screen flex justify-center">
      <div className="flex flex-col w-3/5 2xl:w-1/2 mt-24 gap-2">
        <div className="flex flex-row gap-16 justify-center">
          <div
            className="text-3xl cursor-pointer"
            onClick={() => router.push("/recipe")}
          >
            {"<"}
          </div>
          <p className="text-xl font-sofiaPro text-wrap">{recipeData.title}</p>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Image
            className="rounded-lg"
            src={recipeData.image}
            width={300}
            height={500}
            alt={recipeData.title}
          ></Image>
          <div className="flex flex-row gap-3 items-center justify-center">
            <div className="flex flex-row gap-2 justify-center items-center">
              <Soup className="w-4" />
              <p className="font-light text-sm font-sofiaPro">
                Serves {recipeData.servings}
              </p>
            </div>
            &#x2022;
            <div className="flex flex-row gap-2 justify-center items-center">
              <Timer className="w-4" />
              <p className="font-light text-sm font-sofiaPro">
                Ready in {recipeData.readyInMinutes} mins
              </p>
            </div>
            &#x2022;
            <div
              className="flex flex-row gap-2 justify-center items-center hover:underline cursor-pointer"
              onMouseEnter={handleSavedHoverIn}
              onMouseLeave={handleSavedHoverOut}
            >
              {savedIcon ? (
                <Bookmark fill="#EE6C23" strokeWidth={0} className="w-4" />
              ) : (
                <Bookmark className="w-4" />
              )}
              {savedText ? (
                <p className="font-light text-sm font-sofiaPro">Unsave Recipe</p>
              ) : (
                <p
                  className="font-light text-sm font-sofiaPro"
                  onClick={saveRecipe}
                >
                  Save Recipe
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Id;
