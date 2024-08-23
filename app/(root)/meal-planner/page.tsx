"use client";

import EditMeal from "@/components/EditMeal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getLoggedInUser } from "@/lib/appwrite";
import {
  getCookie,
  hasCookie,
  setCookieMealPlanner,
} from "@/lib/cookies";
import { UserProps } from "@/lib/utils";
import React, { useEffect, useState } from "react";

const MealPlannerApp = () => {
  const [user, setUser] = useState<UserProps>();
  const [data, setData] = useState([
    {
      id: 1,
      day: "Monday",
      meal: "Breakfast",
      data: "maggi",
    },
    {
      id: 2,
      day: "Monday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 3,
      day: "Monday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 4,
      day: "Monday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 5,
      day: "Tuesday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 6,
      day: "Tuesday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 7,
      day: "Tuesday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 8,
      day: "Tuesday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 9,
      day: "Wednesday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 10,
      day: "Wednesday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 11,
      day: "Wednesday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 12,
      day: "Wednesday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 13,
      day: "Thursday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 14,
      day: "Thursday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 15,
      day: "Thursday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 16,
      day: "Thursday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 17,
      day: "Friday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 18,
      day: "Friday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 19,
      day: "Friday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 20,
      day: "Friday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 21,
      day: "Saturday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 22,
      day: "Saturday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 23,
      day: "Saturday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 24,
      day: "Saturday",
      meal: "Dinner",
      data: "",
    },
    {
      id: 25,
      day: "Sunday",
      meal: "Breakfast",
      data: "",
    },
    {
      id: 26,
      day: "Sunday",
      meal: "Lunch",
      data: "",
    },
    {
      id: 27,
      day: "Sunday",
      meal: "Snacks",
      data: "",
    },
    {
      id: 28,
      day: "Sunday",
      meal: "Dinner",
      data: "",
    },
  ]);

  useEffect(() => {
    getLoggedInUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (!user) {
      if (hasCookie("mealPlanner")) {
        getCookie("data").then((data) => {
          if (data) {
            setData(JSON.parse(data.value));
          }
        });
      }

      if (!hasCookie("mealPlanner")) {
        setCookieMealPlanner("mealPlanner", data);
      }
    }
  }, [user, data]);

  const updateData = (id: number, value: string) => {
    const newData = data.map((item) => {
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
                <td className="border-2 border-black font-sofiaPro">Monday</td>
                {data
                  .filter((item) => item.id <= 4)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">Tuesday</td>
                {data
                  .filter((item) => item.id >= 5 && item.id <= 8)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">
                  Wednesday
                </td>
                {data
                  .filter((item) => item.id >= 9 && item.id <= 12)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">
                  Thursday
                </td>
                {data
                  .filter((item) => item.id >= 13 && item.id <= 16)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">Friday</td>
                {data
                  .filter((item) => item.id >= 17 && item.id <= 20)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">
                  Saturday
                </td>
                {data
                  .filter((item) => item.id >= 21 && item.id <= 24)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
                <td className="border-2 border-black font-sofiaPro">Sunday</td>
                {data
                  .filter((item) => item.id >= 25 && item.id <= 28)
                  .map((item) => (
                    <Dialog key={item.id}>
                      <DialogTrigger asChild>
                        <td
                          key={item.id}
                          className="border-2 border-black font-sofiaPro"
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
