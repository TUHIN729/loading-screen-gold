// Loading Screen Gold — a tip for stressed developers and AI coding agents.
// Writes one line (<= 200 chars) to /output/entry.txt.
// Deterministic: the same fixed string on every run, so both grader runs match.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns on rubber-duck debugging: saying the bug out loud is the
// real tip, and the punchline is that the AI agent "loading beside you"
// was listening all along — so the tip works for the human and the agent.
const TIP =
  "Tip: while this loads, say the bug out loud. If it sounds dumb, it is — and the agent loading beside you just heard the answer too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
