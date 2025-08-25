import { CreateUser } from "../types/user.types";

export const validateSignup = (user: CreateUser): string[] => {
  const { email, password } = user;
  let errors: string[] = [];

  if (!email || !password) {
    errors.push("Email and password are required");
    return errors;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    errors.push("Invalid email format");
  }

  const passwordRegex = /^(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    errors.push(
      "Password must be at least 6 characters and contain at least one number"
    );
  }

  return errors;
};
