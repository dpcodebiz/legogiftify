import express, { Response, json } from "express";
import dotenv from "dotenv";
import { GetSets } from "sets/list";
import cors from "cors";
import { GetSet } from "sets/get";
import { GetParts } from "parts/get";
import { SearchParts } from "parts/search";
import { AddPartToSet } from "sets/add";

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

// TODO types
// Sets
app.get("/sets", GetSets);
app.post("/sets/add", json, AddPartToSet);
app.get("/sets/:set_num", GetSet);

// Parts
app.get("/parts/search", SearchParts);
app.get("/parts/:set_num", GetParts);

// App
app
  .listen(PORT, () => {
    console.log("Backend running on port ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
