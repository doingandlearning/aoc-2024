# Advent of Code 2024

Deno this year. Let's see how this goes.

I know TypeScript well and have done some work with Deno. It'll be interesting to see if there is much difference.

As in previous years, there are three files for each day:
- dayx.ts
- dayx.test
- dayx.input

The input file is in the .gitignore so if you want to use my solutions you'll need to add those files with your own input.

## Day 1

A gentle start as normal. I don't think I make it past day 12 often but I'm going to give it a good shot this year. 

TIL Deno has a number of tools for reading files and a specific `readTextFile` function which is nicer than needing to import `node:fs/promises`.

## Day 2

I didn't read the question properly and missed some of the edge cases in both parts initially. Got there in the end but took longer that I might have liked.

I updated my Deno running harness. Deno.run() is a great way to run another shell command - to do this in Node I'd have to use a child_process. This was a lot cleaner!