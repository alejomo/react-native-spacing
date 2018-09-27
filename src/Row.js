import React from "react";
import { View } from "react-native";
import { getRowStyle, filterViewProps } from "./utils/spacing";
import createStyleSheet from "./utils/stylesheet";

export default function Row(props) {
  const style = getRowStyle(props);
  const viewProps = filterViewProps(props);

  return (
    <View {...viewProps} style={[createStyleSheet(style), viewProps.style]} />
  );
}
