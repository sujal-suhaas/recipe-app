"use client";

import NavBar from "@/components/NavBar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchParams.get("query") || "");
  }, [searchParams]);

  return (
    <main className="w-full h-screen flex justify-center">
      <NavBar type="Search" />
      <section className="pt-20 w-[60%] h-screen max-lg:hidden bg-slate-50">
        <div>
          <p className="font-sofiaPro font-normal">Recipes related to "{value}"</p>
        </div>
      </section>
    </main>
  );
};

export default Search;
