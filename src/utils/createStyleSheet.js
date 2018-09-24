import { StyleSheet } from "react-native";

const cache = {};

export default function createStyleSheet(style) {
  const key = getCacheKey(style);

  if (typeof cache[key] === "undefined") {
    Object.assign(cache, StyleSheet.create({ [key]: style }));
  }

  return cache[key];
}

export function getCacheKey(style) {
  return JSON.stringify(style);
}
