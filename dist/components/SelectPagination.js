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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fl db lh-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Total Records: ", totalrecords), /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Records per page \xA0", /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: defaultSelection,
    onChange: e => handleSelectitem(e.target.value)
  }, pages.map((p, i) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: p
    }, p);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Go to page\xA0", /*#__PURE__*/_react.default.createElement("select", {
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