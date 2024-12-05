const input = await Deno.readTextFile("05/day5.input");

const [instructions, books] = input.split("\n\n");

const rules = new Map<number, number[]>();
instructions.split("\n").forEach((pair) => {
  const [first, second] = pair.split("|").map(Number);
  const current = rules.get(first) || [];
  current.push(second);
  rules.set(first, current);
});

function part1() {
  console.log("part1");
  console.log("Target: 5064 (5152");
  let count = 0;

  const splitBooks = books.split("\n");
  for (const book of splitBooks) {
    const bookPages = book.split(",").map(Number);
    let inOrder = true;
    const ordered: number[] = [];
    for (const page of bookPages) {
      const before = rules.get(page) || [];
      for (const el of before) {
        if (ordered.includes(el)) {
          inOrder = false;
        }
      }
      ordered.push(page);
    }
    if (inOrder) {
      count += findMiddle(book);
    }
  }

  console.log(count);
  const middleNumbers = splitBooks.filter(isOrdered).map(findMiddle);
  console.log(middleNumbers.reduce((a, c) => a + c, 0));
}

function isOrdered(book: string) {
  const [, unchanged] = orderBook(book);
  return unchanged;
}

function orderBook(book: string) {
  const result: number[] = [];
  let unchanged = true;
  const input = book.split(",").map(Number);
  while (input.length > 0) {
    const element = input.shift();
    const pairedElements = rules.get(element!) || [];
    for (const pairedElement of pairedElements) {
      if (result.includes(pairedElement)) {
        unchanged = false;
      }
    }
    result.push(element!);
  }
  return [result, unchanged];
}

function findMiddle(books: string | number[]) {
  const input =
    typeof books === "string" ? books.split(",").map(Number) : books;
  const middle = (input.length - 1) / 2;
  return input[middle];
}

part1();

function part2() {
  console.log("part 2");
  console.log(
    books
      .split("\n")
      .filter((el) => !isOrdered(el))
      .map(sortBook)
      .map(findMiddle)
      .reduce((a, c) => a + c, 0)
  );
}
function sortBook(book: string) {
  const pages = book.split(",").map(Number);
  pages.sort((a, b) => {
    const beforeA = rules.get(a) || [];
    const beforeB = rules.get(b) || [];
    if (beforeA.includes(b)) {
      return -1;
    } else if (beforeB.includes(a)) {
      return 1;
    } else {
      return 0;
    }
  });

  return pages;
}
part2();
