const dayNumber = prompt("Enter day number: ");

let dayFile = null;

if (parseInt(dayNumber!) < 5) {
  dayFile = `day${dayNumber}.ts`;
} else {
  dayFile = `${dayNumber?.padStart(2, "0")}/day${dayNumber}.ts`;
}

// Create the command
const command = new Deno.Command("deno", {
  args: ["run", "--watch", "--allow-read", dayFile],
  stdin: "inherit", // Pass input from the terminal
  stdout: "inherit", // Stream the stdout directly to the console
  stderr: "inherit", // Stream the stderr directly to the console
});

// Run the command
const process = command.spawn();
const status = await process.status;

console.log(`Process exited with status code: ${status.code}`);
