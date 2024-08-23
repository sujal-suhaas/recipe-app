"use client";

import EditMeal from "@/components/EditMeal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getLoggedInUser, updateUserInfo } from "@/lib/appwrite";
import {
  getLocalStorage,
  hasLocalStorage,
  setLocalStorage,
} from "@/lib/localStorage";
import { dummyData, parseStringify, UserProps } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const MealPlannerApp = () => {
  const [user, setUser] = useState<UserProps>();
  const [data, setData] =
    useState<{ id: number; day: string; meal: string; data: string }[]>();

  useEffect(() => {
    getLoggedInUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      if (hasLocalStorage("mealPlanner")) {
        setData(JSON.parse(getLocalStorage("mealPlanner")!));
      }

      if (!hasLocalStorage("mealPlanner")) {
        setLocalStorage("mealPlanner", JSON.stringify(dummyData));
      }
    }

    if (user) {
      if (user?.mealPlanner) {
        setData(JSON.parse(user?.mealPlanner));
      }

      if (!user?.mealPlanner) {
        updateUserInfo({
          documentId: user?.$id,
          mealPlanner: JSON.stringify(dummyData),
        });
      }
    }
  }, [user]);

  useEffect(() => {
    if (data) {
      if (!user) {
        setLocalStorage("mealPlanner", JSON.stringify(data));
      }

      if (user) {
        updateUserInfo({
          documentId: user?.$id,
          mealPlanner: JSON.stringify(data),
        });
      }
    }
  }, [data, user]);

  const updateData = (id: number, value: string) => {
    const newData = data!.map((item) => {
      if (item.id === id) {
        return { ...item, data: value };
      }
      return item;
    });

    setData(newData);
  };

  return (
    <section className="bg-[#FFECE3] bg-opacity-75 w-full h-full min-h-screen flex flex-col items-center pb-5">
      <div className="flex flex-col items-center w-4/5 mt-20 gap-8 h-screen">
        <p className="font-sofiaPro font-normal">
          Click on a cell to add, edit or delete recipe.
        </p>
        <div className="">
          <table className="w-full table-fixed border-2 border-black h-96">
            <tbody>
              <tr>
                <td></td>
                <th className="border-2 border-black font-sofiaPro">
                  Breakfast
                </th>
                <th className="border-2 border-black font-sofiaPro">Lunch</th>
                <th className="border-2 border-black font-sofiaPro">Snacks</th>
                <th className="border-2 border-black font-sofiaPro">Dinner</th>
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Monday
                </td>
                {data &&
                  data
                    .filter((item) => item.id <= 4)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Tuesday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 5 && item.id <= 8)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Wednesday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 9 && item.id <= 12)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Thursday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 13 && item.id <= 16)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Friday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 17 && item.id <= 20)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Saturday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 21 && item.id <= 24)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro p-2">
                  Sunday
                </td>
                {data &&
                  data
                    .filter((item) => item.id >= 25 && item.id <= 28)
                    .map((item) => (
                      <Dialog key={item.id}>
                        <DialogTrigger asChild>
                          <td
                            key={item.id}
                            className="border-2 border-black font-sofiaPro p-2"
                          >
                            {item.data}
                          </td>
                        </DialogTrigger>
                        <EditMeal
                          key={item.id}
                          id={item.id}
                          data={item}
                          changeText={updateData}
                        />
                      </Dialog>
                    ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MealPlannerApp;
