import { Client, Account, ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL!)
  .setProject(process.env.NEXT_PUBLIC__APPWRITE_PROJECT_ID!);

const account = new Account(client);

export const getLoggedInUser = async () => {
    try {
        return await account.get();
    } catch (error) {
        return error;
    }
};

export const signIn = async (email: string, password: string) => {
    try {
        return await account.createEmailPasswordSession(email, password);
    } catch (error) {
        return error;
    }
};

export const signUp = async (email: string, password: string, name: string) => {
    try {
        return await account.create(ID.unique(), email, password, name);
    } catch (error) {
        return error;
    }
};

export const logout = async () => {
  try {
    return await account.deleteSession("current");
  } catch (error) {
    return error;
  }
};
