const input = await Deno.readTextFile("day1.input");

const left = [];
const right = [];
input.split("\n").forEach((line) => {
  const [l, r] = line.split("   ");
  left.push(l);
  right.push(r);
});

function part1() {
  const sortedLeft = left.toSorted();
  const sortedRight = right.toSorted();

  let totalDifference = 0;

  for (let i = 0; i < left.length; i++) {
    totalDifference += Math.abs(
      parseInt(sortedLeft[i]) - parseInt(sortedRight[i])
    );
  }

  console.log(totalDifference);
}
console.log("Day 1 Part 1");
part1();

function part2() {
  const dictionary = right.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  // console.log(dictionary);
  let total = 0;

  for (let i = 0; i < left.length; i++) {
    if (dictionary[left[i]]) {
      total += parseInt(left[i]) * dictionary[left[i]];
    }
  }

  console.log(total);
}

console.log("Day 1 Part 2");
part2();
