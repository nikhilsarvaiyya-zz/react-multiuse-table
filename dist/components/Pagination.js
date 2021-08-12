"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pagination = props => {
  const {
    rmtHeaders,
    handleSelectitem,
    paginateSelection,
    defaultSelection
  } = props;
  let pages;

  if (paginateSelection) {
    pages = paginateSelection;
  } else {
    pages = [5, 10, 15, 20];
  }

  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      padding: ".5em",
      border: "1px solid lightgrey",
      cursor: "pointer",
      textAlign: "left"
    },
    colSpan: rmtHeaders.length
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: defaultSelection,
    onChange: e => handleSelectitem(e.target.value)
  }, pages.map((p, i) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: p
    }, p);
  })))));
};

var _default = Pagination;
exports.default = _default;