"use client";

import { authFormSchema } from "@/lib/utils";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { signIn, signUp } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        await signUp(
          data.email,
          data.password,
          data.firstName || "",
          data.lastName || ""
        );

        toast({ title: "Success", description: "Account has been created" });
      }

      if (type === "sign-in") {
        await signIn(data.email, data.password);

        toast({ title: "Success", description: "You have logged in" });
      }

      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section className="flex flex-col">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {type === "sign-up" && (
            <div className="flex gap-4">
              <CustomInput
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
              />
              <CustomInput
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />
            </div>
          )}
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <div className="flex flex-col gap-4 pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="form-btn font-sofiaPro bg-[#EE6C23] hover:bg-[#FF6108]"
            >
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  &nbsp; Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
          </div>
        </form>
      </Form>
      <footer className="flex justify-center gap-1 pt-4">
        <p className="text-14 text-gray-600 font-sofiaPro text-sm">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/sign-up" : "/sign-in"}
          className="form-link font-sofiaPro text-sm text-[#EE6C23] hover:underline"
        >
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;
