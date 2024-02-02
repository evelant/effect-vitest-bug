import * as path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "effect-test": path.join(__dirname, "effect-test/src"),
    },
  },
  test: {
    include: ["./test/**/*.test.ts"],
    chaiConfig: {
      truncateThreshold: Infinity,
      showDiff: true,
    },
  },
});
