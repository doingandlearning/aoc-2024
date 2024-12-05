// ask for a day number and then run dayX.ts in watch mode
// use only Deno built-int

import { readLines } from "https://deno.land/std/io/mod.ts";

const dayNumber = prompt("Enter day number: ");
const dayFile = `${dayNumber?.padStart(2, "0")}/day${dayNumber}.ts`;

const process = Deno.run({
  cmd: ["deno", "run", "--watch", "--allow-read", dayFile],
});

await process.status();

// const command = new Deno.Command("deno", {
//   args: ["run", "--watch", "--allow-read", dayFile],
// });
// const { success, stdout } = await command.output();
// console.log(success);
// console.log(new TextDecoder().decode(stdout));
