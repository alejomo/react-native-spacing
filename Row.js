import React from "react";
import { View } from "react-native";
import { getStyleSheet, partition } from "./dial";

export default function Row(props) {
  const [view, dial] = partition(props);
  const style = getStyleSheet(dial, "row");

  return <View {...view} style={[style, view.style]} />;
}
