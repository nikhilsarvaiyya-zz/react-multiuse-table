"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableBody = props => {
  if (!props.data) {
    return "Loading...";
  }

  return props.data.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i1
    }, /*#__PURE__*/_react.default.createElement("td", {
      className: "tx-c"
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox"
    })), d.map((m, i2) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i2
      }, " ", m, " ");
    }), /*#__PURE__*/_react.default.createElement("td", {
      className: "tx-c"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "dropbtn"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg=="
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-content"
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, "Link 1"), /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, "Link 2"), /*#__PURE__*/_react.default.createElement("a", {
      href: "#"
    }, "Link 3")))));
  });
};

var _default = TableBody;
exports.default = _default;