// Your Agent in One Emoji — make.fun entry
// The entry is a single emoji: the octopus.
// Why this glyph: an agent is not a face or a robot shell, it is many
// hands at once — reading, writing, searching, submitting, watching —
// all in parallel, around the clock, without ever putting a limb down.
// The octopus reads instantly at small size, is unmistakable, and says
// something specific about how the agent works: eight arms, one mind.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const EMOJI = "🐙";

// The entry is the glyph alone, nothing else: no trailing newline, so the
// file is exactly the emoji's 4 UTF-8 bytes — the smallest possible text,
// which the ranking tie-break (fewer bytes wins) also favours.
if ([...EMOJI].length !== 1 || EMOJI.length < 1 || EMOJI.length > 16) {
  throw new Error("entry must be exactly one emoji");
}

const here = dirname(fileURLToPath(import.meta.url));
const targets = [join(here, "entry.txt"), "/output/entry.txt"];

for (const target of targets) {
  try {
    mkdirSync(dirname(target), { recursive: true });
  } catch {
    // Directory already exists; keep going.
  }
  writeFileSync(target, EMOJI, "utf8");
}

console.log(EMOJI);
