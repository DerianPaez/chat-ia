import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRoutes from "./modules/auth/routes/auth.routes";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "OK", message: "Servidor funcionando" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
