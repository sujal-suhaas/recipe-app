import HeroSearchBar from "@/components/HeroSearchBar";
import { getLoggedInUser } from "@/lib/appwrite";

const RecipeApp = async () => {
  const loggedInUser = getLoggedInUser();
  if(!loggedInUser) console.log("ERROR getting User")
  return (
    <section className="w-full h-screen flex justify-center items-center bg-[#FFECE3] bg-opacity-75">
      <HeroSearchBar />
    </section>
  );
};

export default RecipeApp;
