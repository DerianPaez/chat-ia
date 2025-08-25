import { CreateUser } from "../types/user.types";
import { createUser, getUserByEmail } from "../repositories/auth.respository";
import bcrypt from "bcrypt";

export const signupService = async (user: CreateUser) => {
  const { data: existingUser } = await getUserByEmail(user.email);
  if (existingUser && existingUser.length > 0)
    throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(user.password, 10);
  const { data, error } = await createUser({
    email: user.email.toLowerCase(),
    password: hashedPassword,
  });

  if (error) throw new Error(error.message);

  return { data, message: "User created successfully" };
};
