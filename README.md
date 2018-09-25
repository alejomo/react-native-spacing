# react-native-spacing

A wrapper around the react-native `<View/>` component enabling concise assignment of flexbox layout properties.

The idea is to keep JSX as clean as possible, while removing the need to manage stylesheet declarations for common positioning needs.

## Differences with `react-native-row`

Due to inactivity of the original repository, I've made the following changes to the package

- [(HOT)Fixed](https://github.com/hyrwork/react-native-row/pull/13) broken shorthand notation
- Implemented [cached styles](https://github.com/hyrwork/react-native-row/issues/10)
- Accept [shorthand notation as `string`](https://github.com/hyrwork/react-native-row/issues/12)
- Replaced actual values in shorthand notation, by `0, 1, 2, 3, 4, 5` sizes [à la Bootstrap v4](https://getbootstrap.com/docs/4.0/utilities/spacing/)
- Added multiple spacing shorthand properties: `mb` (marginBottom), `pv` (paddingVertical), etc...
- Added unit tests.

## Installation

```
yarn install react-native-row
```

## Basic Usage

Use react-native-row as little or as much as you want.

```js
// Before
<View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }} />
<View style={{ flex: 1, justifyContent: "flex-end", alignItems: "flex-start" }} />

// After
<Row dial={5} flex />
<View dial={6} flex />
```

## Documentation

### `dial` property

One of the most DRY features of react-native-row is the `dial` property.

The idea behind this shorthand notation, is to position the child components of `Row`/`View` according to the position of the `dial` number on a phone dial pad.

#### Example

```js
import { Row } from "react-native-spacing";

<Row dial={5} flex />
```

`5` is centered along both axis and, because this is a `Row`, children are horizontally aligned:
<img src='examples/example1.jpg' width="180" />

### `View`

Import `View` from this package instead of from `react-native` and all of your `<View />` components can use dial as well.

#### Example

```js
import View from "react-native-row";

<View dial={5} flex>
  <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
  <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
</View>
```
<img src="examples/example2.jpg" width="180" />

### `space` property

You can also use the `space` property to override `justifyContent`:

```js
<View dial={5} space="between" flex />
```
<img src="examples/example3.jpg" width="180" />

```js
<View dial={5} space="around" flex />
```
<img src="examples/example4.jpg" width="180" />

### `stretch` property

Use the `stretch` property to override `alignItems`:

```js
<View dial={5} stretch flex />
```

### `flex` property

```js
<Row flex /> // flex = 1 by default
<Row flex={3} />
```

### `reverse` property

Use reverse to change `row` to `row-reverse` or `column` to `column-reverse`:

```js
<Row reverse />
<View reverse />
```

### Margin and Padding shorthand

Margin and padding shorthands are inspired by [Bootstrap v4 spacing utility system](https://getbootstrap.com/docs/4.0/utilities/spacing/).

Extra benefits are gained by using react-native-view instead of the core `View` in that you can use shorthands for `margin` and `padding` styles that are based on the css shorthand convention

    <Row margin={[20,15]}/>


becomes

    <View style={{flexDirection: 'row', marginVertical: 20, marginHorizontal: 15}} />

#### margin

Shorthand   | Style Result
------------ | -------------
`margin={20}` | `{margin: 20}`
`margin={[20]}` | `{marginVertical: 20}`
`margin={[20,15]}` | `{marginVertical: 20, marginHorizontal: 15 }`
`margin={[20,15,10]}` | `{marginTop: 20, marginHorizontal: 15, marginBottom: 10}`
`margin={[20,15,10,5]}` | `{marginTop: 20, marginRight: 15, marginBottom: 10, marginLeft: 5}`

#### padding

Shorthand   | Style Result
------------ | -------------
`padding={20}` | `{padding: 20}`
`padding={[20]}` | `{paddingVertical: 20}`
`padding={[20,15]}` | `{paddingVertical: 20, paddingHorizontal: 15}`
`padding={[20,15,10]}` | `{paddingTop: 20, paddingHorizontal: 15, paddingBottom: 10}`
`padding={[20,15,10,5]}` | `{paddingTop: 20, paddingRight: 15, paddingBottom: 10, paddingLeft: 5}`



Contributions and issues very much welcome!
