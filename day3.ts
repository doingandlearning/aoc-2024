const input = await Deno.readTextFile("day3.input");

function processLine(line: string) {
  let sum = 0;
  const values = line.matchAll(/mul\(([0-9]{1,3}),([0-9]{1,3})\)/g);
  for (const value of values) {
    sum += parseInt(value[1]) * parseInt(value[2]);
  }
  return sum;
}

function part1() {
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    sum += processLine(line);
  }
  console.log(sum);
}

part1();

let process = true;
function processLine2(line: string) {
  let sum = 0;
  const values = line.matchAll(
    /mul\(([0-9]{1,3}),([0-9]{1,3})\)|do\(\)|don't\(\)/g
  );
  for (const value of values) {
    if (value[0] === "do()") {
      process = true;
    } else if (value[0] === "don't()") {
      process = false;
    } else if (process) {
      sum += parseInt(value[1]) * parseInt(value[2]);
    }
  }
  return sum;
}

function part2() {
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    sum += processLine2(line);
  }
  console.log(sum);
}

part2();
