import React from "react";
import { View as RNView } from "react-native";
import { getSpacing, getFlexbox } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function View({
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
    getFlexbox("column", dial, flex, space, stretch, reverse)
  );

  return <RNView {...props} style={[createStyleSheet(style), props.style]} />;
}
