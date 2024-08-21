"use client";

import React, { Suspense } from "react";
import { useRouter } from "next/navigation";
import UserPage from "@/components/UserPage";

const User = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-[80%]">
        <button className="text-3xl" onClick={() => router.back()}>
          {"<"}{" "}
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserPage />
      </Suspense>
    </div>
  );
};

export default User;
