import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const AddPartToSet = async (req: Request, res: Response) => {
  // Getting set by set_num
  const client = new PrismaClient();

  // TODO sanitation
  // TODO tests

  // Params
  const { set_num, part_num, quantity } = await req.body;

  // Retrieving inventory
  const inventory = await client.inventories.findFirst({
    where: {
      set_num: set_num,
    },
  });

  if (!inventory) return;

  // Retrieving part
  const part = await client.parts.findFirst({
    where: {
      part_num: part_num,
    },
  });

  // Adding inventory part
  const inventory_part = await client.inventory_parts.create({
    data: {
      color_id: 0,
      part_num: part_num,
      inventory_id: inventory.id,
      img_url: "https://cdn.rebrickable.com/media/parts/elements/3000240.jpg", // TODO properly
      is_spare: false, // TODO
      quantity: parseInt(quantity),
    },
  });

  res.status(200).send(inventory_part);
};
