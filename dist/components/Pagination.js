"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PaginationBar = _interopRequireDefault(require("./PaginationBar"));

var _SelectPagination = _interopRequireDefault(require("./SelectPagination"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Pagination = props => {
  const {
    rmtHeaders,
    handleSelectitem,
    paginateSelection,
    defaultSelection,
    totalrecords
  } = props;
  let pages;

  if (paginateSelection) {
    pages = paginateSelection;
  } else {
    pages = [5, 10, 15, 20];
  }

  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: rmtHeaders.length + 2
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "fl"
  }, /*#__PURE__*/_react.default.createElement(_SelectPagination.default, {
    pages: pages,
    defaultSelection: defaultSelection,
    handleSelectitem: handleSelectitem,
    totalrecords: totalrecords
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fr"
  }, /*#__PURE__*/_react.default.createElement(_PaginationBar.default, null)))));
};

var _default = Pagination;
exports.default = _default;