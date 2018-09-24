import React from 'react';
import { View as RNView } from 'react-native';
import { getMargin, getPadding } from './getSpacing'
import createStyleSheet from './createStyleSheet';

const View = (props) => {

    const {
        dial = 0,
        flex: _flex,
        style,
        spaceBetween,
        spaceAround,
        stretch,
        margin,
        padding,
        reverse,
        ...otherProps,
    } = props;

    const _dial = dial > 0 && dial < 10 ? dial : 0;

    const _style = Object.assign({}, getMargin(margin), getPadding(padding));

    _style.flex = typeof(_flex) === "number" ? _flex : !_flex ? null : 1

    _style.justifyContent = spaceBetween ? 'space-between' : spaceAround ? 'space-around' : _dial === 0 ? null : _dial > 6 ? 'flex-end' :
            _dial > 3 ? 'center' : 'flex-start';

    _style.alignItems = stretch ? 'stretch' : _dial === 0 ? null : _dial % 3 === 0 ? 'flex-end' :
            _dial % 3 === 2 ? 'center' : 'flex-start';

    _style.flexDirection = reverse ? 'column-reverse' : 'column';

    return (
        <RNView style={[createStyleSheet(_style), style]} {...otherProps} >
            {props.children}
        </RNView>
    );
};

export default View
