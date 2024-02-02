import { Effect, TestContext, pipe } from "effect";
import * as effectIt from "effect-test/utils/extend";

import { afterEach, assert, beforeEach, describe, it, vitest } from "vitest";

describe("bug", () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });
  afterEach(() => {
    vitest.useRealTimers();
  });
  effectIt.effect(`initial test`, () =>
    Effect.gen(function* (_) {
      assert.deepEqual(["123"], ["234"]);

      // Adjust the TestClock by 10 seconds
      // yield* _(TestClock.adjust("10 seconds"))
      // assert.strictEqual(actual, expected)
    }).pipe(Effect.provide(TestContext.TestContext))
  );
  it(`test2`, async () => {
    await pipe(
      Effect.gen(function* (_) {
        assert.deepEqual(["123"], ["234"]);
      }),
      Effect.runPromise
    );
  });
});
