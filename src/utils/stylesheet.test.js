import { getCacheKey } from "./stylesheet";

// @dev
// I did not find a way to test `StyleSheet.create` output,
// because it seems like `create` method does not return style number references
// in Test env. But just pass through the style object itself.

const style = {
  marginTop: 20,
  paddingVertical: 10,
  flex: 1,
  justifyContent: "space-between",
  alignItems: "stretch",
  flexDirection: "row"
};

test("same cache keys", () => {
  const ref1 = getCacheKey(style);
  const ref2 = getCacheKey({ ...style });

  expect(ref1).toBe(ref2);
});

test("different cache keys", () => {
  const ref1 = getCacheKey(style);
  const ref2 = getCacheKey({ ...style, borderRadius: 3 });

  expect(ref1).not.toBe(ref2);
});
