"use client";

import React from "react";

const MealPlannerApp = () => {
  const data = [
    {
      id: 1,
      data: "",
    },
    {
      id: 2,
      data: "",
    },
    {
      id: 3,
      data: "",
    },
    {
      id: 4,
      data: "",
    },
    {
      id: 5,
      data: "",
    },
    {
      id: 6,
      data: "",
    },
    {
      id: 7,
      data: "",
    },
    {
      id: 8,
      data: "",
    },
    {
      id: 9,
      data: "",
    },
    {
      id: 10,
      data: "",
    },
    {
      id: 11,
      data: "",
    },
    {
      id: 12,
      data: "",
    },
    {
      id: 13,
      data: "",
    },
    {
      id: 14,
      data: "",
    },
    {
      id: 15,
      data: "",
    },
    {
      id: 16,
      data: "",
    },
    {
      id: 17,
      data: "",
    },
    {
      id: 18,
      data: "",
    },
    {
      id: 19,
      data: "",
    },
    {
      id: 20,
      data: "",
    },
    {
      id: 21,
      data: "",
    },
    {
      id: 22,
      data: "",
    },
    {
      id: 23,
      data: "",
    },
    {
      id: 24,
      data: "",
    },
    {
      id: 25,
      data: "",
    },
    {
      id: 26,
      data: "",
    },
    {
      id: 27,
      data: "",
    },
    {
      id: 28,
      data: "",
    },
  ];

  return (
    <section className="bg-[#FFECE3] bg-opacity-75 w-full h-full min-h-screen flex flex-col items-center pb-5">
      <div className="flex flex-col items-center w-4/5 mt-20 gap-8 h-screen">
        <p className="font-sofiaPro font-normal">
          Double click on cell to add, edit or delete recipe.
        </p>
        <div className="">
          <table className="w-full table-fixed border-2 border-black h">
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
                  .filter((item) => item.id >= 1 && item.id <= 4)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">Tuesday</td>
                {data
                  .filter((item) => item.id >= 5 && item.id <= 8)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">
                  Wednesday
                </td>
                {data
                  .filter((item) => item.id >= 9 && item.id < 12)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">
                  Thursday
                </td>
                {data
                  .filter((item) => item.id >= 13 && item.id <= 16)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">Friday</td>
                {data
                  .filter((item) => item.id >= 17 && item.id <= 20)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">
                  Saturday
                </td>
                {data
                  .filter((item) => item.id >= 21 && item.id <= 24)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
                  ))}
              </tr>
              <tr>
                <td className="border-2 border-black font-sofiaPro">Sunday</td>
                {data
                  .filter((item) => item.id >= 24 && item.id <= 28)
                  .map((item) => (
                    <td
                      key={item.id}
                      className="border-2 border-black font-sofiaPro"
                    >
                      {item.data}
                    </td>
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
