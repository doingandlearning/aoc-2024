const input = await Deno.readTextFile("day4.input");

const grid = input.split("\n");

function part1() {
  console.log("part 1");
  let solutions = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === "X") {
        solutions += countXmasInstancesAtCoordinate(x, y);
      }
    }
  }
  console.log(solutions);
}

class WordBuilder {
  private word: string;

  constructor(private grid: string[], private x: number, private y: number) {
    this.grid = grid;
    this.x = x;
    this.y = y;
    if (x >= 0 && x < grid.length && y >= 0 && y < grid[x].length) {
      this.word = grid[x].charAt(y);
    } else {
      this.word = "";
    }
  }

  public navigate(xOffset: number, yOffset: number) {
    this.x += xOffset;
    this.y += yOffset;
    if (
      this.x >= 0 &&
      this.x < this.grid.length &&
      this.y >= 0 &&
      this.y < this.grid[this.x].length
    ) {
      this.word += this.grid[this.x][this.y];
    }
    return this;
  }

  public getWord() {
    return this.word;
  }
}

const countXmasInstancesAtCoordinate = (x: number, y: number) => {
  let xmasInstances = 0;

  for (let xOffset = -1; xOffset <= 1; xOffset++) {
    for (let yOffset = -1; yOffset <= 1; yOffset++) {
      const check = new WordBuilder(grid, x, y);
      for (let i = 0; i < 3; i++) {
        check.navigate(xOffset, yOffset);
      }
      if (check.getWord() === "XMAS") xmasInstances++;
    }
  }

  return xmasInstances;
};

part1();

function part2() {
  console.log("part 2");
  let solutions = 0;
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === "A" && isCrossAtCoordinate(x, y)) {
        solutions += 1;
      }
    }
  }
  console.log(solutions);
}

function isCrossAtCoordinate(x: number, y: number) {
  const firstSlash = new WordBuilder(grid, x - 1, y - 1)
    .navigate(1, 1)
    .navigate(1, 1)
    .getWord();
  const secondSlash = new WordBuilder(grid, x - 1, y + 1)
    .navigate(1, -1)
    .navigate(1, -1)
    .getWord();
  return (
    (firstSlash === "MAS" || firstSlash === "SAM") &&
    (secondSlash === "MAS" || secondSlash === "SAM")
  );
}

part2();
