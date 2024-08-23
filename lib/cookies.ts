"use server";

import { cookies } from "next/headers";

export const setCookie = async (key: string, value: string[]) => {
  cookies().set(key, JSON.stringify(value), {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
};

export const getCookie = async (key: string) => {
  return cookies().get(key);
};

export const deleteCookie = async (key: string) => {
  cookies().delete(key);
};

export const hasCookie = (key: string) => {
  return cookies().has(key);
};
