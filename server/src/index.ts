import express from "express";
import supabase from "../config/supabase-client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", async (req, res) => {
  const users = await supabase.from("users").select();
  res.json(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
