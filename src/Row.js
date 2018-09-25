import React from "react";
import { View } from "react-native";
import { getSpacing, getFlexbox, filterViewProps } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function Row(props) {
  const style = Object.assign(getSpacing(props), getFlexbox("row", props));
  const viewProps = filterViewProps(props);

  return (
    <View {...viewProps} style={[createStyleSheet(style), viewProps.style]} />
  );
}
