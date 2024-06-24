import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const GetSet = async (req: Request, res: Response) => {
  // Getting set by set_num
  const client = new PrismaClient();

  // Params
  const { set_num } = req.params;

  const set = await client.sets.findFirst({
    where: {
      set_num: set_num,
    },
  });

  res.status(200).send(set);
};
