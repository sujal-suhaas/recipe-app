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
} from "@/components/ui/dialog";

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
    setIsAlertVisible(true);
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
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="w-[80%]">
        <button className="text-3xl" onClick={() => router.back()}>{"<"} </button>
      </div>
      {user?.userId === searchParams.get("id") ? (
        <div className="flex flex-col w-[40%] m-20 gap-10">
          <div className="flex items-center justify-center">
            <div className="profile-img w-32 h-32 flex justify-center items-center p-7 rounded-full bg-[#EE6C23]">
              <span className="text-5xl font-bold text-white">
                {user.firstName[0]}
              </span>
            </div>
          </div>
          <div className="font-sofiaPro">
            Name: {user.firstName} {user.lastName}
          </div>
          <div className="font-sofiaPro">Email: {user.email}</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="font-sofiaPro bg-red-500 hover:bg-red-700">
                Logout
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-sofiaPro">
                  Are you sure?
                </DialogTitle>
                <DialogDescription className="font-sofiaPro">
                  You want to logout
                </DialogDescription>
              </DialogHeader>

              <DialogFooter className="sm:justify-start gap-2">
                <DialogClose asChild>
                  <Button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 font-sofiaPro"
                    onClick={handleLogOut}
                  >
                    Logout
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    type="button"
                    variant="secondary"
                    className="font-sofiaPro"
                  >
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ) : (
        <>
          {!isAlertVisible && <div className="font-sofiaPro">Loading...</div>}
          {isAlertVisible && (
            <div className="font-sofiaPro">You are not logged in</div>
          )}
        </>
      )}
    </div>
  );
};

export default User;
