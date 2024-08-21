import { recipes } from "@/lib/data";
import { getRecipe } from "@/lib/spoonacular";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bookmark, ExternalLink, Soup, Timer } from "lucide-react";
import { getLoggedInUser, updateUserInfo } from "@/lib/appwrite";
import { UserProps } from "@/lib/utils";
import { getCookie, hasCookie, setCookie } from "@/lib/cookies";

const RecipePage = () => {
  const router = useRouter();
  const [user, setUser] = useState<UserProps>();

  const [likedRecipes, setLikedRecipes] = useState<string[]>([]);
  const [viewedRecipes, setViewedRecipes] = useState<string[]>([]);

  const [recipeId, setRecipeId] = useState("");
  const searchParams = useSearchParams();

  const [recipeData, setRecipeData] = useState<any>("");

  const [savedIcon, setSavedIcon] = useState(false);
  const [savedText, setSavedText] = useState(false);

  useEffect(() => {
    getLoggedInUser().then((user) => {
      setUser(user);
    });
    setRecipeId(searchParams.get("id") || "");
  }, [searchParams]);

  useEffect(() => {
    /* getRecipe(recipeId).then((data) => {
          setRecipeData(data);
      }); */
    setRecipeData(recipes);
  }, [recipeId]);

  useEffect(() => {
    if (!user && hasCookie("likedRecipes")) {
      getCookie("likedRecipes").then((recipes) => {
        if (recipes) {
          setLikedRecipes(JSON.parse(recipes!.value));
        }
      });
    } else if (!user && hasCookie("viewedRecipes")) {
      getCookie("viewedRecipes").then((recipes) => {
        if (recipes) {
          setViewedRecipes(JSON.parse(recipes!.value));
        }
      });
    } else {
      if (user?.likedRecipes) {
        setLikedRecipes(user?.likedRecipes);
      } else if (user?.viewedRecipes) {
        setViewedRecipes(user?.viewedRecipes);
      } else {
        setLikedRecipes([]);
        setViewedRecipes([]);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      if (!viewedRecipes.includes(String(recipeData.id))) {
        updateUserInfo({
          documentId: user?.$id,
          viewedRecipes: [...viewedRecipes, String(recipeData.id)],
        });
      }
    }

    if (!user) {
      if (!viewedRecipes.includes(String(recipeData.id))) {
        setCookie("viewedRecipes", [...viewedRecipes, String(recipeData.id)]);
      }
    }
  }, [recipeData, viewedRecipes, user]);

  useEffect(() => {
    if (recipeData) {
      if (likedRecipes.includes(String(recipeData.id))) {
        setSavedText(true);
      } else {
        setSavedText(false);
      }
    }
  }, [recipeData, likedRecipes]);

  const handleSavedHover = () => {
    if (!savedIcon) {
      setSavedIcon(true);
    }
    if (savedIcon) {
      setSavedIcon(false);
    }
  };

  const saveRecipe = () => {
    if (!savedText) {
      if (user) {
        updateUserInfo({
          documentId: user?.$id,
          likedRecipes: [...likedRecipes, String(recipeId)],
        });
      }
      if (!user) {
        setCookie("likedRecipes", [...likedRecipes, String(recipeId)]);
      }

      setLikedRecipes([...likedRecipes, String(recipeId)]);

      setSavedText(true);
    }

    if (savedText) {
      if (user) {
        updateUserInfo({
          documentId: user?.$id,
          likedRecipes: likedRecipes.filter((id) => {
            return id !== String(recipeData.id);
          }),
        });
      }

      if (!user) {
        setCookie(
          "likedRecipes",
          likedRecipes.filter((id) => {
            return id !== String(recipeData.id);
          })
        );
      }

      setLikedRecipes(
        likedRecipes.filter((id) => {
          return id !== String(recipeData.id);
        })
      );

      setSavedText(false);
    }
  };

  return (
    <>
      <div className="absolute mt-24 flex w-3/5 2xl:w-1/2">
        <div
          className="text-3xl cursor-pointer"
          onClick={() => router.push("/recipe")}
        >
          {"<"}
        </div>
      </div>
      <div className="flex flex-col w-5/12 mt-24 gap-8">
        <div className="flex flex-col gap-8 justify-center items-center">
          <p className="text-xl font-semibold font-sofiaPro text-wrap">
            {recipeData.title}
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <Image
              priority
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
                onMouseEnter={handleSavedHover}
                onMouseLeave={handleSavedHover}
                onClick={saveRecipe}
              >
                {savedText || savedIcon ? (
                  <Bookmark fill="#EE6C23" strokeWidth={0} className="w-4" />
                ) : (
                  <Bookmark className="w-4" />
                )}
                {savedText ? (
                  <p className="font-light text-sm font-sofiaPro">Saved</p>
                ) : (
                  <p className="font-light text-sm font-sofiaPro">Save</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="ingredients">
          <p className="font-sofiaPro">Ingredients -</p>
          <div className="flex flex-col gap-1 ml-8">
            {recipeData.extendedIngredients?.map((ingredient: any) => (
              <p
                key={ingredient.id}
                className="font-sofiaPro font-light text-sm"
              >
                {ingredient.amount} {ingredient.unit} - {ingredient.name}
              </p>
            ))}
          </div>
        </div>
        <div className="instructions">
          <p className="font-sofiaPro">Instructions -</p>
          <p className="flex flex-row ml-8 font-sofiaPro font-light text-sm gap-2 items-center h-5">
            Instructions are available on{" "}
            <a
              className="peer text-[#EE6C23]"
              href={recipeData.sourceUrl}
              target="_blank"
            >
              {recipeData.sourceName}
            </a>
            <ExternalLink className="hidden peer-hover:block w-3" />
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
