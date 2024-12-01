// ask for a day number and then run dayX.ts in watch mode
// use only Deno built-int

import { readLines } from "https://deno.land/std/io/mod.ts";

const dayNumber = prompt("Enter day number: ");
const dayFile = `day${dayNumber}.ts`;

const process = Deno.run({
  cmd: ["deno", "run", "--watch", "--allow-read", dayFile],
});

await process.status();
