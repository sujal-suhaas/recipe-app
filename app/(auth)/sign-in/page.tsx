import AuthForm from "@/components/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <section className="bg-white">
      <div className="flex justify-center items-center w-full h-screen max-sm:px-6 bg-[#FFECE3]">
      <div className="w-[30%]">
          <AuthForm type="sign-in" />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
