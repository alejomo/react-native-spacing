import { getStyle } from "./spacing";

test("margin", () => {
  expect(getStyle({ m: 3 })).toHaveProperty("margin", 16);
});

test("padding", () => {
  expect(getStyle({ p: "3" })).toHaveProperty("padding", 16);
});

test("top", () => {
  expect(getStyle({ mt: 2 })).toHaveProperty("marginTop", 8);
});

test("right", () => {
  expect(getStyle({ mr: "2" })).toHaveProperty("marginRight", 8);
});

test("bottom", () => {
  expect(getStyle({ mb: 2 })).toHaveProperty("marginBottom", 8);
});

test("left", () => {
  expect(getStyle({ ml: "2" })).toHaveProperty("marginLeft", 8);
});

test("vertical", () => {
  expect(getStyle({ mv: 2 })).toHaveProperty("marginVertical", 8);
});

test("horizontal", () => {
  expect(getStyle({ mh: "2" })).toHaveProperty("marginHorizontal", 8);
});

test("shorthand (1)", () => {
  expect(getStyle({ m: 4 })).toHaveProperty("margin", 32);
});

test("shorthand (2)", () => {
  const result = getStyle({ m: "4 1" });

  expect(result).toHaveProperty("marginVertical", 32);
  expect(result).toHaveProperty("marginHorizontal", 4);
});

test("shorthand (3)", () => {
  const result = getStyle({ m: "4 2 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginHorizontal", 8);
  expect(result).toHaveProperty("marginBottom", 4);
});

test("shorthand (4)", () => {
  const result = getStyle({ m: "4 2 1 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginRight", 8);
  expect(result).toHaveProperty("marginBottom", 4);
  expect(result).toHaveProperty("marginLeft", 4);
});

test("Dial (Row)", () => {
  let style;

  // Dial 1
  style = getStyle({ dial: 1 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getStyle({ dial: 2 }, "row");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 3
  style = getStyle({ dial: 3 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 4
  style = getStyle({ dial: 4 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 5
  style = getStyle({ dial: 5 }, "row");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getStyle({ dial: 6 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 7
  style = getStyle({ dial: 7 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 8
  style = getStyle({ dial: 8 }, "row");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 9
  style = getStyle({ dial: 9 }, "row");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});

test("Dial (Column)", () => {
  let style;

  // Dial 1
  style = getStyle({ dial: 1 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getStyle({ dial: 2 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 3
  style = getStyle({ dial: 3 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 4
  style = getStyle({ dial: 4 }, "column");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 5
  style = getStyle({ dial: 5 }, "column");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getStyle({ dial: 6 }, "column");

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 7
  style = getStyle({ dial: 7 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 8
  style = getStyle({ dial: 8 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 9
  style = getStyle({ dial: 9 }, "column");

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});
