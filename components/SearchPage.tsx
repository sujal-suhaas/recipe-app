import NavBar from "@/components/NavBar";
import { searchRecipes } from "@/lib/spoonacular";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Image from "next/image";

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState<any>({
    offset: 0,
    number: 2,
    results: [
      {
        id: 716429,
        title: "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
        image: "https://img.spoonacular.com/recipes/716429-312x231.jpg",
        imageType: "jpg",
      },
      {
        id: 715538,
        title:
          "What to make for dinner tonight?? Bruschetta Style Pork & Pasta",
        image: "https://img.spoonacular.com/recipes/715538-312x231.jpg",
        imageType: "jpg",
      },
    ],
    totalResults: 86,
  });

  /*  useEffect(() => {
    setQuery(searchParams.get("query") || "");

    try {
      searchRecipes(query).then((recipes) => {
        setRecipes(recipes);
      });
    } catch (error) {
      throw new Error("Error searching recipes");
    }
  }, [searchParams]); */

  return (
    <main className="w-full h-screen flex justify-center bg-[#FFECE3] bg-opacity-75">
      <NavBar type="Search" />
      <section className="flex flex-col gap-10 pt-20 w-[60%] h-screen">
        <div>
          <p className="font-sofiaPro font-normal">
            Recipes related to "<span className="font-bold">{query}</span>"
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 justify-between">
          {recipes?.results.map((recipe: any) => (
            <div
              onClick={() => router.push(`/id?id=${recipe.id}`)}
              key={recipe.id}
              className="flex flex-col justify-center items-center w-[235px] p-2 hover:bg-white hover:shadow-md rounded-xl cursor-pointer gap-2 hover:underline active:shadow-none"
            >
              <Image
                className="rounded-xl"
                src={recipe.image}
                width={231}
                height={312}
                alt={recipe.id}
              />
              <div className="w-full">
                <p className="font-sofiaPro font-normal truncate text-sm">
                  {recipe.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
