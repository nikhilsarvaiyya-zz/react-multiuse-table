"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectPagination = props => {
  const {
    defaultSelection,
    handleSelectitem,
    pages,
    totalrecords
  } = props;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "0 20px 0 0",
      display: "inline-block"
    }
  }, "Total Records: ", totalrecords), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "0 20px 0 0",
      display: "inline-block"
    }
  }, "Records per page", /*#__PURE__*/_react.default.createElement("select", {
    style: {
      padding: "3px 8px 3px 3px",
      margin: "3px"
    },
    defaultValue: defaultSelection,
    onChange: e => handleSelectitem(e.target.value)
  }, pages.map((p, i) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: p
    }, p);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "0 20px 0 0",
      display: "inline-block"
    }
  }, "Go to page", /*#__PURE__*/_react.default.createElement("select", {
    style: {
      padding: "3px 8px 3px 3px",
      margin: "3px"
    },
    defaultValue: defaultSelection,
    onChange: e => handleSelectitem(e.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: 1
  }, "1"), /*#__PURE__*/_react.default.createElement("option", {
    value: 2
  }, "2"), /*#__PURE__*/_react.default.createElement("option", {
    value: 3
  }, "3"), /*#__PURE__*/_react.default.createElement("option", {
    value: 4
  }, "4"))));
};

var _default = SelectPagination;
exports.default = _default;