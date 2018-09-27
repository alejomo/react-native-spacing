import React from "react";
import { View } from "react-native";
import { getStyle, filterViewProps } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function Row(props) {
  const style = getStyle(props, "row");
  const viewProps = filterViewProps(props);

  return (
    <View {...viewProps} style={[createStyleSheet(style), viewProps.style]} />
  );
}
