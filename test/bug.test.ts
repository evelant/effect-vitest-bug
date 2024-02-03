import { Effect, pipe } from "effect";

import { assert, describe, it } from "vitest";

describe("bug", () => {
  it(`errors work properly with async`, async () => {
    const t = async () => {
      assert.deepEqual(["123"], ["234"]);
    };
    await t();
  });
  it(`fails to return expected or actual when using an Effect`, async () => {
    await pipe(
      Effect.sync(() => assert.deepEqual(["123"], ["234"])),
      Effect.runPromise
    );
  });
  it(`fails to return expected or actual when using an Effect generator`, async () => {
    await pipe(
      Effect.gen(function* (_) {
        assert.deepEqual(["123"], ["234"]);
      }),
      Effect.runPromise
    );
  });
});
