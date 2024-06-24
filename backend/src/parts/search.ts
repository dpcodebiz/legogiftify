import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const SearchParts = async (req: Request, res: Response) => {
  // Getting sets
  const client = new PrismaClient();

  // Getting query
  // TODO validation
  const { q } = req.query;

  const parts = await client.parts.findMany({
    where: {
      name: {
        contains: q as string,
      },
    },
  });

  // Sending
  res
    .status(200)
    .send(parts.map((part) => ({ label: part.name, value: part.part_num })));
};
