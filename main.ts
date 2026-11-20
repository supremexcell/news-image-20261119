// News image, Thursday 19 November 2026 — the program's only job.
//
// The front page is already finished and sits in this folder as
// entry.png (1024x1024, drawn offline with no network). Nothing here
// renders, fetches, or randomises anything: the program just delivers
// that exact file to the place the grader reads from, so two runs
// produce byte-identical output.
//
// The output directory comes from MAKEFUN_OUTPUT_DIR when make.fun
// sets it; without it, the program uses /output, the path the brief
// names. The directory is created first, so a fresh container works
// with no setup beyond `node main.ts`.
//
// After the copy, the program reads the written file back and checks
// its bytes against the source. A silent partial or corrupted copy
// would otherwise pass unnoticed and hand the grader a broken image;
// any mismatch aborts with a non-zero exit and a clear message instead.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// This file lives in the repository root, so entry.png is always
// in the same folder as the program itself.
const here = dirname(fileURLToPath(import.meta.url));

// Prefer the directory make.fun provides, fall back to /output.
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });

const source = join(here, "entry.png");
const target = join(destination, "entry.png");
copyFileSync(source, target);

// Verify the copy: the file the grader will read must be byte-for-byte
// the file in this repository. Compare the two buffers; Node's
// Buffer.equals gives a strict byte-wise result.
const expected = readFileSync(source);
const written = readFileSync(target);
if (!expected.equals(written)) {
  console.error(
    `Verification failed: ${target} differs from ${source} ` +
      `(expected ${expected.length} bytes, wrote ${written.length} bytes)`,
  );
  process.exit(1);
}
