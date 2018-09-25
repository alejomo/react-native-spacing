import { getSpacing, getFlexbox } from "./spacing";

test("margin", () => {
  expect(getSpacing({ m: 3 })).toHaveProperty("margin", 16);
});

test("padding", () => {
  expect(getSpacing({ p: "3" })).toHaveProperty("padding", 16);
});

test("top", () => {
  expect(getSpacing({ mt: 2 })).toHaveProperty("marginTop", 8);
});

test("right", () => {
  expect(getSpacing({ mr: "2" })).toHaveProperty("marginRight", 8);
});

test("bottom", () => {
  expect(getSpacing({ mb: 2 })).toHaveProperty("marginBottom", 8);
});

test("left", () => {
  expect(getSpacing({ ml: "2" })).toHaveProperty("marginLeft", 8);
});

test("vertical", () => {
  expect(getSpacing({ mv: 2 })).toHaveProperty("marginVertical", 8);
});

test("horizontal", () => {
  expect(getSpacing({ mh: "2" })).toHaveProperty("marginHorizontal", 8);
});

test("shorthand (1)", () => {
  expect(getSpacing({ m: 4 })).toHaveProperty("margin", 32);
});

test("shorthand (2)", () => {
  const result = getSpacing({ m: "4 1" });

  expect(result).toHaveProperty("marginVertical", 32);
  expect(result).toHaveProperty("marginHorizontal", 4);
});

test("shorthand (3)", () => {
  const result = getSpacing({ m: "4 2 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginHorizontal", 8);
  expect(result).toHaveProperty("marginBottom", 4);
});

test("shorthand (4)", () => {
  const result = getSpacing({ m: "4 2 1 1" });

  expect(result).toHaveProperty("marginTop", 32);
  expect(result).toHaveProperty("marginRight", 8);
  expect(result).toHaveProperty("marginBottom", 4);
  expect(result).toHaveProperty("marginLeft", 4);
});

test("Dial (Row)", () => {
  let style;

  // Dial 1
  style = getFlexbox("row", { dial: 1 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getFlexbox("row", { dial: 2 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 3
  style = getFlexbox("row", { dial: 3 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 4
  style = getFlexbox("row", { dial: 4 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 5
  style = getFlexbox("row", { dial: 5 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getFlexbox("row", { dial: 6 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 7
  style = getFlexbox("row", { dial: 7 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 8
  style = getFlexbox("row", { dial: 8 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 9
  style = getFlexbox("row", { dial: 9 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});

test("Dial (Column)", () => {
  let style;

  // Dial 1
  style = getFlexbox("column", { dial: 1 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getFlexbox("column", { dial: 2 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 3
  style = getFlexbox("column", { dial: 3 });

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 4
  style = getFlexbox("column", { dial: 4 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 5
  style = getFlexbox("column", { dial: 5 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getFlexbox("column", { dial: 6 });

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 7
  style = getFlexbox("column", { dial: 7 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 8
  style = getFlexbox("column", { dial: 8 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 9
  style = getFlexbox("column", { dial: 9 });

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});
