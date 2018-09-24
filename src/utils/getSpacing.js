export function getMargin(spacing) {
  return getSpacing("margin", spacing);
}

export function getPadding(spacing) {
  return getSpacing("padding", spacing);
}

export function getFlexbox(
  dir,
  dial = 0,
  flex,
  spaceBetween,
  spaceAround,
  stretch,
  reverse
) {
  if (dial < 0 || dial > 10) {
    throw new TypeError("`dial` parameter must be an integer between 1 and 9");
  }

  // Main-axis
  let justifyContent;

  if (spaceBetween) {
    justifyContent = "space-between";
  } else if (spaceAround) {
    justifyContent = "space-around";
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

function getSpacing(type, spacing) {
  const style = {};

  if (typeof spacing === "string") {
    spacing = spacing.split(" ").map(val => parseInt(val, 10));

    if (spacing.length === 1) {
      spacing = spacing.pop();
    }
  }

  if (typeof spacing === "number") {
    style[type] = spacing;
  } else if (Array.isArray(spacing)) {
    switch (spacing.length) {
      case 1:
        style[`${type}Vertical`] = spacing[0];
        break;

      case 2:
        style[`${type}Vertical`] = spacing[0];
        style[`${type}Horizontal`] = spacing[1];
        break;

      case 3:
        style[`${type}Top`] = spacing[0];
        style[`${type}Horizontal`] = spacing[1];
        style[`${type}Bottom`] = spacing[2];
        break;

      case 4:
        style[`${type}Top`] = spacing[0];
        style[`${type}Right`] = spacing[1];
        style[`${type}Bottom`] = spacing[2];
        style[`${type}Left`] = spacing[3];
        break;

      default:
        break;
    }
  }

  return style;
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
