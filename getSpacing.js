export function getMargin(spacing) {
  return getSpacing("margin", spacing);
}

export function getPadding(spacing) {
  return getSpacing("padding", spacing);
}

function getSpacing(type, spacing) {
  const s = {};

  if (typeof spacing === "string") {
    spacing = spacing.split(" ").map(val => parseInt(val, 10));

    if (spacing.length === 1) {
      spacing = spacing.pop();
    }
  }

  if (typeof spacing === "number") {
    s[type] = spacing;
  } else if (Array.isArray(spacing)) {
    switch (spacing.length) {
      case 1:
        s[`${type}Vertical`] = spacing[0];
        break;
      case 2:
        s[`${type}Vertical`] = spacing[0];
        s[`${type}Horizontal`] = spacing[1];
        break;
      case 3:
        s[`${type}Top`] = spacing[0];
        s[`${type}Horizontal`] = spacing[1];
        s[`${type}Bottom`] = spacing[2];
        break;
      case 4:
        s[`${type}Top`] = spacing[0];
        s[`${type}Right`] = spacing[1];
        s[`${type}Bottom`] = spacing[2];
        s[`${type}Left`] = spacing[3];
        break;
      default:
        break;
    }
  }

  return s;
}
