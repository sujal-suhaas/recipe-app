import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
  z.object({
    // sign up
    firstName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    lastName:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(20),
    // both
    email: z.string().email(),
    password: z.string().min(8),
  });

export type UserProps = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  likedRecipes: [];
  viewedRecipes: [];
  mealPlanner: string;
  $id: string;
  $databaseId: string;
  $collectionId: string;
};

export const dummyData = <
  { id: number; day: string; meal: string; data: string }[]
>[
  {
    id: 1,
    day: "Monday",
    meal: "Breakfast",
    data: "",
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
];
