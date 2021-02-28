(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "antd/lib/button/button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("antd/lib/button/button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _react, _button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var React = _interopRequireWildcard(_react);

  var _button2 = _interopRequireDefault(_button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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

    return /*#__PURE__*/React.createElement(_button2.default, _extends({}, props, {
      ref: ref,
      className: _classes,
      style: _objectSpread(_objectSpread({}, _style), props.style),
      ghost: _ghost,
      type: _type
    }), props.children);
  });
  exports.default = Button;
});
//# sourceMappingURL=index.js.map