import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { counting, group, mapValues, objectify } from "radash";

export const GetParts = async (req: Request, res: Response) => {
  // Getting set by set_num
  const client = new PrismaClient();

  // Params
  const { set_num } = req.params;

  // Getting inventory
  const inventory = await client.inventories.findFirst({
    where: {
      set_num: set_num,
    },
  });

  // TODO error handling

  // Getting inventory parts
  const inventory_parts = await client.inventory_parts.findMany({
    where: {
      inventory_id: inventory?.id,
    },
  });

  // Grouping parts by part_num
  const parts_nums = group(inventory_parts, (e) => e.part_num);

  // Getting parts name
  const parts = await client.parts.findMany({
    select: {
      part_num: true,
      name: true,
    },
    where: {
      part_num: {
        in: Object.keys(parts_nums),
      },
    },
  });

  // Objectifying results
  const names_by_parts = objectify(
    parts,
    (e) => e.part_num,
    (e) => e.name
  );

  // Adding name to parts
  const inventory_parts_names = inventory_parts.map((data) => ({
    name: names_by_parts[data.part_num],
    ...data,
  }));

  res.status(200).send(inventory_parts_names);
};
