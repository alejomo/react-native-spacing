import { _m, _mt, _pb } from "./styles";

// @dev
// I did not find a way to test `StyleSheet.create` output,
// because it seems like `create` method does not return style number references
// in Test env. But just pass through the style object itself.

test("margin", () => {
  expect(_m(3)).toHaveProperty("margin", 16);
});

test("margin top", () => {
  expect(_mt(2)).toHaveProperty("marginTop", 8);
});

test("padding bottom", () => {
  expect(_pb(1)).toHaveProperty("paddingBottom", 4);
});
