import { cookies } from "next/headers";

export async function setCookie(key: string, value: string) {
    cookies().set(key, value, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
    });
}

export async function getCookie(key: string) {
    return cookies().get(key)?.value;
}

export async function deleteCookie(key: string) {
    cookies().delete(key);
}