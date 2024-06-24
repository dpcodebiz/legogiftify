import express, { Response } from "express";
import dotenv from "dotenv";
import { GetSets } from "sets/list";
import cors from "cors";

dotenv.config();
const app = express();

// Setting cors
app.use(cors());

// Getting port
const PORT = process.env.PORT;

// Root
app.get("/", (_, res: Response) => {
  res.status(200).send("Backend is on");
});

// Sets
// TODO types
app.get("/sets", GetSets as any);

// App
app
  .listen(PORT, () => {
    console.log("Backend running on port ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
