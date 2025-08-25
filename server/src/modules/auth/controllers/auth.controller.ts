import { Request, Response } from "express";
import { validateSignup } from "../validations/auth.validations";
import { signupService } from "../services/auth.service";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    const validationUserError = validateSignup(req.body);
    if (validationUserError.length > 0) {
      res.status(400).json({ errors: validationUserError });
      return;
    }

    const { data, message } = await signupService(req.body);

    res.status(201).json({ data, message });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
