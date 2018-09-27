import _zipObject from "lodash.zipobject";
import _constant from "lodash.constant";

const config = {
  sizes: []
};

const sides = ["", "t", "r", "b", "l", "v", "h"];

export const marginPropNames = sides.map(side => `m${side}`);
export const paddingPropNames = sides.map(side => `p${side}`);

export const spacingPropNames = marginPropNames
  .concat(paddingPropNames)
  .concat(["dial", "flex", "space", "stretch", "reverse", "color"]);

export const spacingProps = _zipObject(
  spacingPropNames,
  spacingPropNames.map(_constant(true))
);

export function getSize(index) {
  index = parseInt(index, 10);

  if (isNaN(index) || index < 0 || index > config.sizes.length - 1) {
    throw new TypeError(`Invalid size index: ${index}`);
  }

  return config.sizes[index];
}

export function setSizes(spacing, range = 5, strategy = doubleStrategy) {
  if (typeof spacing === "number") {
    config.sizes = [];

    for (let index = 0; index < range; index++) {
      config.sizes.push(strategy(spacing, index, range));
    }
  } else {
    config.sizes = spacing;
  }

  config.sizes.unshift(0);
}

function doubleStrategy(spacing, index) {
  return spacing * Math.pow(2, index);
}

// Init (default)
// [0, 4, 8, 16, 32, 64]
setSizes(4);
