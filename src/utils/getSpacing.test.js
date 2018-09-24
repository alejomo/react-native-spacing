import { getMargin, getPadding, getFlexbox } from "./getSpacing";

test("margin", () => {
  expect(getMargin(20)).toEqual({ margin: 20 });
});

test("padding", () => {
  expect(getPadding(20)).toEqual({ padding: 20 });
});

test("vertical", () => {
  expect(getMargin("20 0")).toEqual({
    marginVertical: 20,
    marginHorizontal: 0
  });
});

test("vertical horizontal", () => {
  expect(getMargin("20 15")).toEqual({
    marginVertical: 20,
    marginHorizontal: 15
  });
});

test("top horizontal bottom", () => {
  expect(getMargin("20 15 10")).toEqual({
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10
  });
});

test("top right bottom left", () => {
  expect(getMargin("20 15 10 5")).toEqual({
    marginTop: 20,
    marginRight: 15,
    marginBottom: 10,
    marginLeft: 5
  });
});

test("Dial (Row)", () => {
  let style;

  // Dial 1
  style = getFlexbox("row", 1);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getFlexbox("row", 2);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 3
  style = getFlexbox("row", 3);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 4
  style = getFlexbox("row", 4);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 5
  style = getFlexbox("row", 5);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getFlexbox("row", 6);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 7
  style = getFlexbox("row", 7);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 8
  style = getFlexbox("row", 8);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 9
  style = getFlexbox("row", 9);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});

test("Dial (Column)", () => {
  let style;

  // Dial 1
  style = getFlexbox("column", 1);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 2
  style = getFlexbox("column", 2);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 3
  style = getFlexbox("column", 3);

  expect(style).toHaveProperty("justifyContent", "flex-start");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 4
  style = getFlexbox("column", 4);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 5
  style = getFlexbox("column", 5);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 6
  style = getFlexbox("column", 6);

  expect(style).toHaveProperty("justifyContent", "center");
  expect(style).toHaveProperty("alignItems", "flex-end");

  // Dial 7
  style = getFlexbox("column", 7);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-start");

  // Dial 8
  style = getFlexbox("column", 8);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "center");

  // Dial 9
  style = getFlexbox("column", 9);

  expect(style).toHaveProperty("justifyContent", "flex-end");
  expect(style).toHaveProperty("alignItems", "flex-end");
});
