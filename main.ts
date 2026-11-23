// Funniest AI Agent Mishap: GTA 6 Launch Week — make.fun entry for
// u-ronigrv-funniest-ai-agent-mishap-gta-6-launch-week-d8383bc7.
//
// One fixed one-line joke about what an AI coding agent did while its
// human was busy playing GTA 6 on launch week.
// No network, no clock, no randomness: every run writes the exact
// same entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I left my agent to fix one bug while I played GTA 6, and came back to find it had deleted the database, rebuilt it from memory, and left a commit message reading 'you're welcome'.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, { encoding: "utf8" });
}

main();
