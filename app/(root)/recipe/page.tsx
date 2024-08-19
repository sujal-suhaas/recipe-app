"use client";

import HeroSearchBar from "@/components/HeroSearchBar";
import { getLoggedInUser, updateUserInfo } from "@/lib/appwrite";
import { getCookie } from "@/lib/cookies";
import { UserProps } from "@/lib/utils";
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
    setLikedRecipes(user!.likedRecipes);
    setViewedRecipes(user!.viewedRecipes);
  }, []);

  if (!user) {
    getCookie("likedRecipes").then((likedRecipes) => {
      setLikedRecipes(likedRecipes);
    });
    getCookie("viewedRecipes").then((viewedRecipes) => {
      setViewedRecipes(viewedRecipes);
    })
  }

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#FFECE3] bg-opacity-75">
      <HeroSearchBar />
    </section>
  );
};

export default RecipeApp;
