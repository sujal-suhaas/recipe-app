"use server";

import { Client, Account, ID, Databases, Query } from "appwrite";
import { cookies } from "next/headers";

const {
  NEXT_PUBLIC_APPWRITE_URL: APPWRITE_URL,
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_COLLECTION_ID: COLLECTION_ID,
} = process.env;

const client = new Client();

client.setEndpoint(APPWRITE_URL!).setProject(PROJECT_ID!);

const account = new Account(client);

const database = new Databases(client);

const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getUserInfo = async ({ userId }: { userId: string }) => {
  try {
    const user = await database.listDocuments(DATABASE_ID!, COLLECTION_ID!, [
      Query.equal("userId", [userId]),
    ]);

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getLoggedInUser = async () => {
  try {
    const result = await account.get();
    const user = await getUserInfo({ userId: result.$id });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    const user = await getUserInfo({ userId: session.userId });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  try {
    const createNewUser = await account.create(
      ID.unique(),
      email,
      password,
      [firstName, lastName].join(" ")
    );

    const newUser = await database.createDocument(
      DATABASE_ID!,
      COLLECTION_ID!,
      ID.unique(),
      {
        userId: createNewUser.$id,
        email: email,
        firstName: firstName,
        lastName: lastName,
        likedRecipes: [],
      }
    );

    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUser);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
  } catch (error) {
    console.log(error);
  }
};
