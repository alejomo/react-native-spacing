import { setSizes, getSize } from "./config";

test("default sizes", () => {
  expect(getSize(5)).toBe(64);
  expect(getSize(4)).toBe(32);
  expect(getSize(3)).toBe(16);
  expect(getSize(2)).toBe(8);
  expect(getSize(1)).toBe(4);
  expect(getSize(0)).toBe(0);
});

test("custom sizes", () => {
  setSizes(10);

  expect(getSize(4)).toBe(80);
  expect(getSize(3)).toBe(40);
  expect(getSize(2)).toBe(20);
  expect(getSize(1)).toBe(10);
});

test("custom sizes (range)", () => {
  setSizes(4, 2);

  expect(getSize(2)).toBe(8);
  expect(getSize(1)).toBe(4);

  expect(() => {
    getSize(3);
  }).toThrow();
});

test("custom sizes (strategy)", () => {
  setSizes(10, 3, (x, index) => x * (index + 1) + 1000);

  expect(getSize(3)).toBe(1030);
  expect(getSize(2)).toBe(1020);
  expect(getSize(1)).toBe(1010);
});
