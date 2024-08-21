"use client";

import HeroSearchBar from "@/components/HeroSearchBar";
import { getLoggedInUser } from "@/lib/appwrite";
import { getCookie, hasCookie } from "@/lib/cookies";
import { recipes } from "@/lib/data";
import { getRecipe } from "@/lib/spoonacular";
import { UserProps } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const RecipeApp = () => {
  const [user, setUser] = useState<UserProps>();
  const [likedRecipes, setLikedRecipes] = useState<string[]>([]);
  const [viewedRecipes, setViewedRecipes] = useState<string[]>([]);

  useEffect(() => {
    getLoggedInUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user && hasCookie("likedRecipes")) {
      getCookie("likedRecipes").then((recipes) => {
        if (recipes) {
          setLikedRecipes(JSON.parse(recipes!.value));
        }
      });
    }

    if (!user && hasCookie("viewedRecipes")) {
      getCookie("viewedRecipes").then((recipes) => {
        if (recipes) {
          setViewedRecipes(JSON.parse(recipes!.value));
        }
      });
    }
  }, [user]);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#FFECE3] bg-opacity-75">
      <HeroSearchBar />
    </section>
  );
};

export default RecipeApp;
