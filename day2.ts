const input = await Deno.readTextFile("day2.input");

const reports = input
  .split("\n")
  .map((report) => report.split(" ").map(Number));

function testReport(report: number[], showReport = false) {
  let increasing = null;
  if (showReport) {
    console.log(report);
  }
  for (let i = 1; i < report.length; i++) {
    const increasingMeasure = report[i] > report[i - 1] ? 1 : -1;
    if (report[i] === report[i - 1]) {
      return [false, i];
    }
    if (increasing && increasingMeasure !== increasing) {
      return [false, i];
    }
    if (Math.abs(report[i] - report[i - 1]) > 3) {
      return [false, i];
    }
    if (!increasing) {
      increasing = increasingMeasure;
    }
  }
  return [true, -1];
}

function part1() {
  console.log("Part 1");
  let safeReports = 0;
  console.log(reports.length);

  for (const levels of reports) {
    if (testReport(levels)[0]) {
      safeReports++;
    }
  }
  console.log(safeReports);
}

part1();

function part2() {
  console.log("Part 2");
  let safeReports = 0;
  console.log(reports.length);

  for (const report of reports) {
    const [isSafe] = testReport(report);
    if (isSafe) {
      safeReports++;
      continue;
    }

    for (let i = 0; i < report.length; i++) {
      const filteredReport = report.slice(0, i).concat(report.slice(i + 1));
      const [isSafe2] = testReport(filteredReport);
      if (isSafe2) {
        safeReports++;
        break;
      }
    }
  }
  console.log(safeReports);
}

part2();
