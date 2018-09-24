import { getSize } from "../config";

export function getSpacing(type, spacing) {
  const style = {};

  if (typeof spacing === "string") {
    spacing = spacing.split(" ").map(val => parseInt(val, 10));
  } else if (typeof spacing === "number") {
    spacing = [spacing];
  }

  switch (spacing.length) {
    case 1:
      style[type] = getSize(spacing[0]);
      break;

    case 2:
      style[`${type}Vertical`] = getSize(spacing[0]);
      style[`${type}Horizontal`] = getSize(spacing[1]);
      break;

    case 3:
      style[`${type}Top`] = getSize(spacing[0]);
      style[`${type}Horizontal`] = getSize(spacing[1]);
      style[`${type}Bottom`] = getSize(spacing[2]);
      break;

    case 4:
      style[`${type}Top`] = getSize(spacing[0]);
      style[`${type}Right`] = getSize(spacing[1]);
      style[`${type}Bottom`] = getSize(spacing[2]);
      style[`${type}Left`] = getSize(spacing[3]);
      break;

    default:
      throw new TypeError(`Invalid spacing: ${spacing.join(", ")}`);
      break;
  }

  return style;
}

export function getFlexbox(dir, dial = 0, flex, space, stretch, reverse) {
  dial = parseInt(dial, 10);

  if (dial < 0 || dial > 10) {
    throw new TypeError("`dial` parameter must be between 1 and 9");
  }

  // Main-axis
  let justifyContent;

  if (space) {
    justifyContent = `space-${space}`;
  } else if (dial > 0) {
    justifyContent = dir === "row" ? dialX(dial) : dialY(dial);
  } else {
    // undefined
  }

  // Cross-axis
  let alignItems;

  if (stretch) {
    alignItems = "stretch";
  } else if (dial > 0) {
    alignItems = dir === "row" ? dialY(dial) : dialX(dial);
  } else {
    // undefined
  }

  return {
    flex,
    justifyContent,
    alignItems,
    flexDirection: reverse ? `${dir}-reverse` : dir
  };
}

function dialX(dial) {
  if (dial % 3 === 0) return "flex-end";

  if (dial % 3 === 2) return "center";

  return "flex-start";
}

function dialY(dial) {
  if (dial > 6) return "flex-end";

  if (dial > 3) return "center";

  return "flex-start";
}
