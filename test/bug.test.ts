import { Effect, TestContext } from "effect";
import * as it from "effect-test/utils/extend";

import { afterEach, assert, beforeEach, describe, vitest } from "vitest";

describe("bug", () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });
  afterEach(() => {
    vitest.useRealTimers();
  });
  it.effect(`initial test`, () =>
    Effect.gen(function* (_) {
      assert.deepEqual(["123"], ["234"]);

      // Adjust the TestClock by 10 seconds
      // yield* _(TestClock.adjust("10 seconds"))
      // assert.strictEqual(actual, expected)
    }).pipe(Effect.provide(TestContext.TestContext))
  );
});
