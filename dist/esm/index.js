import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import ButtonOriginal from 'antd/lib/button/button';
const customTypeArray = ['success', 'warning', 'info', 'dark', 'lightdark', 'danger'];
const customWithArray = ['link', 'dashed', 'ghost'];
const styleButton = {
  dashed: {
    borderStyle: 'dashed'
  },
  ghost: {
    borderStyle: 'solid'
  },
  link: {
    borderStyle: 'none',
    boxShadow: 'none',
    borderColor: 'transparent'
  }
};
const disableAnimation = 'disable-animation';
const Button = /*#__PURE__*/React.forwardRef((props, ref) => {
  const _isLink = props.with === 'link';

  const _isDashed = props.with === 'dashed';

  const _isGhost = props.with === 'ghost';

  const _type = props.type;

  const _ghost = _isDashed || _isGhost || _isLink || props.ghost ? true : false;

  const _style = props.with ? styleButton[props.with] : undefined;

  const _linkStyle = _isLink ? disableAnimation : undefined;

  const _classes = [_linkStyle, props.className].filter(x => !!x).join(' ');

  return /*#__PURE__*/React.createElement(ButtonOriginal, _extends({}, props, {
    ref: ref,
    className: _classes,
    style: _objectSpread(_objectSpread({}, _style), props.style),
    ghost: _ghost,
    type: _type
  }), props.children);
});
export default Button;
//# sourceMappingURL=index.js.map