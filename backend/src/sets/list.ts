import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const GetSets = async (_: Request, res: Response) => {
  // Getting sets
  const client = new PrismaClient();

  const sets = await client.sets.findMany({ take: 10 });

  res.status(200).send(sets);
};
