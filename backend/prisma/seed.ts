import { PrismaClient } from "@prisma/client";
import { parse } from "csv-parse/sync";
import fs from "fs";
const prisma = new PrismaClient();

const main = async () => {
  // Sets
  const sets_raw = fs.readFileSync("prisma/seeds/sets.csv").toString("utf-8");

  const records = parse(sets_raw, {
    columns: true,
    cast: (value, context) => {
      if (["year", "theme_id", "num_parts"].includes(context.column.toString()))
        return parseInt(value);

      return value;
    },
  });

  await prisma.sets.createMany({ data: records });
};

main();
