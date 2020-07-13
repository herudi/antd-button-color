(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Button);
    global.undefined = mod.exports;
  }
})(this, function (exports, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Button2.default;
});
//# sourceMappingURL=index.js.map