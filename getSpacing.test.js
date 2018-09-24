import { getMargin, getPadding } from "./getSpacing";

test("margin", () => {
  expect(getMargin(20)).toEqual({ margin: 20 });
});

test("margin padding", () => {
  let result;

  result = { margin: 20 };
  expect(getMargin(20)).toEqual(result);
  expect(getMargin("20")).toEqual(result);

  result = { padding: 20 };
  expect(getPadding(20)).toEqual(result);
  expect(getPadding("20")).toEqual(result);
});

test("vertical", () => {
  expect(getMargin([20])).toEqual({ marginVertical: 20 });
  expect(getMargin("20 0")).toEqual({
    marginVertical: 20,
    marginHorizontal: 0
  });
});

test("vertical horizontal", () => {
  const result = {
    marginVertical: 20,
    marginHorizontal: 15
  };

  expect(getMargin([20, 15])).toEqual(result);
  expect(getMargin("20 15")).toEqual(result);
});

test("top horizontal bottom", () => {
  const result = {
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 10
  };

  expect(getMargin([20, 15, 10])).toEqual(result);
  expect(getMargin("20 15 10")).toEqual(result);
});

test("top right bottom left", () => {
  const result = {
    marginTop: 20,
    marginRight: 15,
    marginBottom: 10,
    marginLeft: 5
  };

  expect(getMargin([20, 15, 10, 5])).toEqual(result);
  expect(getMargin("20 15 10 5")).toEqual(result);
});
