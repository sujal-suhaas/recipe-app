"use client";

import AuthForm from "@/components/AuthForm";
import { useRouter } from "next/navigation";
import React from "react";

const SignUp = () => {
  const router = useRouter();

  return (
    <section className="bg-white">
      <div className="relative flex justify-center items-center w-full h-screen max-sm:px-6 bg-[#FFECE3]">
        <div className="absolute top-0 mt-20 w-[80%]">
          <button className="text-3xl" onClick={() => router.push("/recipe")}>
            {"<"}{" "}
          </button>
        </div>
        <div className="w-[30%]">
          <AuthForm type="sign-up" />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
