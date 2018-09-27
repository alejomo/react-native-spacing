import { getRowStyle, getColStyle } from "./spacing";

test("margin", () => {
  expect(getRowStyle({ m: 3 })).toHaveProperty("margin", 16);
});

test("padding", () => {
  expect(getRowStyle({ p: "3" })).toHaveProperty("padding", 16);
});

test("top", () => {
  expect(getRowStyle({ mt: 2 })).toHaveProperty("marginTop", 8);
});

test("right", () => {
  expect(getRowStyle({ mr: "2" })).toHaveProperty("marginRight", 8);
});

test("bottom", () => {
  expect(getRowStyle({ mb: 2 })).toHaveProperty("marginBottom", 8);
});

test("left", () => {
  expect(getRowStyle({ ml: "2" })).toHaveProperty("marginLeft", 8);
});

test("vertical", () => {
  expect(getRowStyle({ mv: 2 })).toHaveProperty("marginVertical", 8);
});

test("horizontal", () => {
  expect(getRowStyle({ mh: "2" })).toHaveProperty("marginHorizontal", 8);
});

test("shorthand (1)", () => {
  expect(getRowStyle({ m: 4 })).toHaveProperty("margin", 32);
});

test("shorthand (2)", () => {
  const result = getRowStyle({ m: "4 1" });

  expect(result).toHaveProperty("marginVertical", 32);
  expect(result).toHaveProperty("marginHorizontal", 4);
});

test("shorthand (3)", () => {
  const result = getRowStyle({ m: "4 2 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginHorizontal", 8);
  expect(result).toHaveProperty("marginBottom", 4);
});

test("shorthand (4)", () => {
  const result = getRowStyle({ m: "4 2 1 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginRight", 8);
  expect(result).toHaveProperty("marginBottom", 4);
  expect(result).toHaveProperty("marginLeft", 4);
});

test("Dial (Row)", () => {
  let style;

  // Dial 1
  style = getRowStyle({ dial: 1 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getRowStyle({ dial: 2 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 3
  style = getRowStyle({ dial: 3 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 4
  style = getRowStyle({ dial: 4 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 5
  style = getRowStyle({ dial: 5 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getRowStyle({ dial: 6 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 7
  style = getRowStyle({ dial: 7 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 8
  style = getRowStyle({ dial: 8 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 9
  style = getRowStyle({ dial: 9 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});

test("Dial (Column)", () => {
  let style;

  // Dial 1
  style = getColStyle({ dial: 1 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getColStyle({ dial: 2 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 3
  style = getColStyle({ dial: 3 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 4
  style = getColStyle({ dial: 4 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 5
  style = getColStyle({ dial: 5 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getColStyle({ dial: 6 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 7
  style = getColStyle({ dial: 7 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 8
  style = getColStyle({ dial: 8 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 9
  style = getColStyle({ dial: 9 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});
