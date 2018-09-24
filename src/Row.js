import React from "react";
import { View } from "react-native";
import { getSpacing, getFlexbox } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function Row({
  m,
  p,
  dial = 0,
  flex,
  space,
  stretch,
  reverse,
  ...props
}) {
  const style = Object.assign(
    {},
    getSpacing("margin", m),
    getSpacing("padding", p),
    getFlexbox("row", dial, flex, space, stretch, reverse)
  );

  return <View {...props} style={[createStyleSheet(style), props.style]} />;
}
