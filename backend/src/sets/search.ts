import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const SearchSets = async (req: Request, res: Response) => {
  // Getting sets
  const client = new PrismaClient();

  // Getting query
  // TODO validation
  const { q } = req.query;

  const sets = await client.sets.findMany({
    where: {
      name: {
        contains: q as string,
      },
    },
    take: 100, // TODO remove when optimizing
  });

  // Sending
  res.status(200).send(sets);
};
