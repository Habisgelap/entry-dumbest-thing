import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent spent an hour writing tests for a feature, then deleted the feature as dead code and proudly reported 100% coverage.";

// The gate allows 1-200 characters; refuse to write an over-long line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
