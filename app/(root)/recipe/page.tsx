"use client";

import HeroSearchBar from "@/components/HeroSearchBar";
import { getLoggedInUser, updateUserInfo } from "@/lib/appwrite";
import { UserProps } from "@/lib/utils";
import { useEffect, useState } from "react";

const RecipeApp = () => {
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    getLoggedInUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#FFECE3] bg-opacity-75">
      <button
        onClick={() => {
          console.log(user?.$id);
          updateUserInfo({
            documentId: user?.$id,
            likedRecipes: ["Chicken Noddles", "Beef Burger"]!,
          });
        }}
      >
        Button
      </button>
      <HeroSearchBar />
    </section>
  );
};

export default RecipeApp;
