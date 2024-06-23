import { PrismaClient } from "@prisma/client";
import { parse } from "csv-parse";
import fs from "fs";

// Config
const TABLES = [
  "colors",
  "elements",
  "inventories",
  "inventory_minifigs",
  "inventory_sets",
  "minifigs",
  "part_categories",
  "part_relationships",
  "parts",
  "sets",
  "themes",
  "inventory_parts",
];
const INTEGER_FIELDS = [
  "id",
  "version",
  "year",
  "theme_id",
  "num_parts",
  "color_id",
  "inventory_id",
  "quantity",
  "part_cat_id",
  "parent_id",
];
const BOOLEAN_FIELDS = ["is_trans", "is_spare"];

// Client
const prisma = new PrismaClient();

async function seed() {
  // Iterating through all seed files
  let iterator = 1;
  for (const table of TABLES) {
    console.log(
      `[] seeding table ${table} ${iterator} / ${TABLES.length} (${(
        ((iterator - 1) * 100) /
        TABLES.length
      ).toFixed(2)} %)`
    );

    // Preparing parser
    const parser = parse({
      delimiter: ",",
      columns: true,
      relax_quotes: true,
      // Casting special fields
      cast: (value, context) => {
        if (INTEGER_FIELDS.includes(context.column.toString()))
          return value === "" ? -1 : parseInt(value);
        if (BOOLEAN_FIELDS.includes(context.column.toString()))
          return value === "t";

        return value;
      },
    });

    // Loading data
    const cb = new Promise(async (resolve) => {
      // Caching batch results
      // This is needed since there are lots of entries inside the inventory_parts file (>1M)
      let batchResults: any[] = [];

      const readable = fs
        .createReadStream(`prisma/raw/${table}.csv`)
        .pipe(parser)
        .on("data", async (data) => {
          // Cache for batching later
          if (batchResults.length < 50000) {
            batchResults.push(data);
            return;
          }

          readable.pause();
          //@ts-expect-error
          await prisma[table].createMany({ data: batchResults });
          batchResults = [];
          readable.resume();
        })
        .on("end", async () => {
          //@ts-expect-error
          await prisma[table].createMany({ data: batchResults });
          resolve(true);
        });
    });

    // Waiting for file to be processed
    await cb;

    iterator += 1;
  }
}

seed();
