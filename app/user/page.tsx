"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/appwrite";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const User = () => {
  const { toast } = useToast();
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await logout();
      router.push("/sign-in");
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } finally {
      toast({
        title: "Success", description: "You have been logged out",
      });
    }
  };

  return (
    <>
      <div>User</div>
      <Button onClick={handleLogOut}>Logout</Button>
    </>
  );
};

export default User;
