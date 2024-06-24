import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const SearchParts = async (req: Request, res: Response) => {
  // Getting sets
  const client = new PrismaClient();

  // Getting query
  // TODO validation
  const { q } = req.query;

  const parts = await client.parts_search.findMany({
    where: {
      part_num: {
        contains: q as string,
      },
    },
    take: 100, // TODO remove when optimizing
  });

  // Sending
  res.status(200).send(
    parts.map((part) => ({
      label: part.part_num,
      value: part.id,
      img_url: part.img_url,
    }))
  );
};
