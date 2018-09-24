import { getSpacing, getFlexbox } from "./spacing";

test("margin", () => {
  expect(getSpacing("margin", 3)).toEqual({ margin: 16 });
});

test("padding", () => {
  expect(getSpacing("padding", 3)).toEqual({ padding: 16 });
});

test("vertical", () => {
  expect(getSpacing("margin", "2 0")).toEqual({
    marginVertical: 8,
    marginHorizontal: 0
  });
});

test("vertical horizontal", () => {
  expect(getSpacing("margin", "4 1")).toEqual({
    marginVertical: 32,
    marginHorizontal: 4
  });
});

test("top horizontal bottom", () => {
  expect(getSpacing("margin", "4 2 1")).toEqual({
    marginTop: 32,
    marginHorizontal: 8,
    marginBottom: 4
  });
});

test("top right bottom left", () => {
  expect(getSpacing("margin", "4 2 1 1")).toEqual({
    marginTop: 32,
    marginRight: 8,
    marginBottom: 4,
    marginLeft: 4
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
