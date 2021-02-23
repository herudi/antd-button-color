"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button/button"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customTypeArray = ['success', 'warning', 'info', 'dark', 'lightdark', 'danger'];
var customWithArray = ['link', 'dashed', 'ghost'];
var styleButton = {
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
var disableAnimation = 'disable-animation';
var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _isLink = props.with === 'link';

  var _isDashed = props.with === 'dashed';

  var _isGhost = props.with === 'ghost';

  var _type = props.type;

  var _ghost = _isDashed || _isGhost || _isLink || props.ghost ? true : false;

  var _style = props.with ? styleButton[props.with] : undefined;

  var _linkStyle = _isLink ? disableAnimation : undefined;

  var _classes = [_linkStyle, props.className].filter(function (x) {
    return !!x;
  }).join(' ');

  return /*#__PURE__*/React.createElement(_button.default, _extends({}, props, {
    ref: ref,
    className: _classes,
    style: _objectSpread(_objectSpread({}, _style), props.style),
    ghost: _ghost,
    type: _type
  }), props.children);
});
var _default = Button;
exports.default = _default;
//# sourceMappingURL=index.js.map