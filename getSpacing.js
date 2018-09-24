export function getMargin(spacing) {
  return getSpacing("margin", spacing);
}

export function getPadding(spacing) {
  return getSpacing("padding", spacing);
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
