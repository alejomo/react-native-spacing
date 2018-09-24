const config = {
  sizes: []
};

export function getSize(index) {
  if (isNaN(index) || index < 0 || index > config.sizes.length - 1) {
    throw new TypeError(`Invalid size index: ${index}`);
  }

  return config.sizes[index];
}

export function setSizes(spacing, range = 5, strategy = double) {
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

function double(spacing, index) {
  return spacing * Math.pow(2, index);
}

// Init (default)
// [0, 4, 8, 16, 32, 64]
setSizes(4);
