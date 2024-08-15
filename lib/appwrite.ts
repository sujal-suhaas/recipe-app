"use server";

import { Client, Account, ID, Databases, Query, Users } from "node-appwrite";
import { cookies } from "next/headers";

const {
  NEXT_PUBLIC_APPWRITE_URL: APPWRITE_URL,
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_API_KEY: API_KEY,
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_COLLECTION_ID: COLLECTION_ID,
} = process.env;

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_URL!)
    .setProject(PROJECT_ID!);

  const session = cookies().get("appwrite-session");

  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_URL!)
    .setProject(PROJECT_ID!)
    .setKey(API_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get users() {
      return new Users(client);
    },
  };
}

const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const getUserInfo = async ({ userId }: { userId: string }) => {
  try {
    const { database } = await createAdminClient();
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
    const { account } = await createSessionClient();
    const result = await account.get();
    const user = await getUserInfo({ userId: result.$id });
    return parseStringify(user);
  } catch (error) {
    return null;
  }
};

export const signIn = async (email: string, password: string) => {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId });

    return parseStringify(user);
};

export const signUp = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
    const { account, database } = await createAdminClient();
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
};

export const logout = async () => {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
};
