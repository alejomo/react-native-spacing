import { StyleSheet } from 'react-native';

export default class Sheet {
  static cache = {};

  static create(style) {
    const key = this.getCacheKey(style);

    if (typeof this.cache[key] === 'undefined') {
      Object.assign(this.cache, StyleSheet.create({ [key]: style }));
    }

    return this.cache[key];
  }

  static getCacheKey(style) {
    return Object.keys(style)
      .map(key => `${key}:${style[key]}`)
      .sort()
      .join(',');
  }
}
