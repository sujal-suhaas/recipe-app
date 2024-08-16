"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getLoggedInUser, logout } from "@/lib/appwrite";
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { UserProps } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const User = () => {
  const [user, setUser] = useState<UserProps>();
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAlertVisible(true);
    }, 5000);
    getLoggedInUser().then((user) => {
      setUser(user);
      setIsAlertVisible(false);
    });
  }, []);

  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

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
        title: "Success",
        description: "You have been logged out",
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {user?.userId === searchParams.get("id") ? (
        <div className="flex flex-col">
          <div className="font-sofiaPro">
            {user.firstName} {user.lastName}
          </div>
          <Button className="font-sofiaPro bg-red-500 hover:bg-red-700" onClick={handleLogOut}>Logout</Button>
        </div>
      ) : (
        <>
          {!isAlertVisible && <div>Loading...</div>}
          {isAlertVisible && <div>You are not logged in</div>}
        </>
      )}
    </div>
  );
};

export default User;
