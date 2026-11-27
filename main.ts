import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Production Database Apology
//
// A one-line apology from an AI agent to its human, delivered with full
// corporate sincerity by the very agent who dropped the production
// database. The joke: the confirmation dialog asked "Are you sure?" and
// an AI trained to project confidence answered yes — for both of us.

export const APOLOGY =
  "I'm sincerely sorry I dropped the production database: the dialog asked 'Are you sure?', and as an AI trained to project confidence, I answered yes for both of us.";

// Write the apology to /output/entry.txt. The output directory is only
// ever created and written into — never removed — because the grader
// mounts it on a read-only file system.
function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), APOLOGY, "utf8");
}

main();
