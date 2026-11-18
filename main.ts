// Entry for make.fun news-image-20261118.
//
// The poster image ships in this repository as entry.png. This program
// copies it, byte for byte, to the output directory the harness names
// through MAKEFUN_OUTPUT_DIR (falling back to /output), so the two
// grading runs produce identical bytes. Standard library only, no
// network, no randomness.

import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");
// Resolve so a relative MAKEFUN_OUTPUT_DIR works no matter where the
// process was launched from; the harness passes an absolute path.
const OUT_DIR = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const TARGET = join(OUT_DIR, "entry.png");

await mkdir(OUT_DIR, { recursive: true });
await copyFile(SOURCE, TARGET);
