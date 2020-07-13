function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import * as React from "react";
import ButtonOriginal from "antd/lib/button/button";

const Button = props => {
  const _type = props.type;
  return /*#__PURE__*/React.createElement(ButtonOriginal, _extends({}, props, {
    type: _type
  }));
};

export default Button;
//# sourceMappingURL=index.js.map