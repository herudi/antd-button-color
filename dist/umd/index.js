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

  const Button = props => {
    const _type = props.type;
    return /*#__PURE__*/React.createElement(_button2.default, _extends({}, props, {
      type: _type
    }));
  };

  exports.default = Button;
});
//# sourceMappingURL=index.js.map