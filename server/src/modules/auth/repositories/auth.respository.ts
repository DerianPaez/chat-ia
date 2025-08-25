import supabase from "../../../config/supabase-client";
import { CreateUser } from "../types/user.types";

export const createUser = async (user: CreateUser) => {
  return await supabase.from("users").insert(user).select("id, email").single();
};

export const getUserByEmail = async (email: string) => {
  return await supabase
    .from("users")
    .select("id")
    .eq("email", email.toLowerCase());
};
