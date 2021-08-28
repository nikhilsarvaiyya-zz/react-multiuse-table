"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SelectPagination = props => {
  const {
    pages,
    totalrecords,
    recordPerPage,
    handleRecordPerPage,
    setCurrentPage,
    currentPage
  } = props;
  const totalPages = Math.round(totalrecords / Number(recordPerPage));
  let allPages = Array.from(Array(totalPages).keys());
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "fl db lh-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Total Records: ", /*#__PURE__*/_react.default.createElement("b", null, totalrecords)), /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Records per page \xA0", /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: recordPerPage,
    onChange: e => {
      handleRecordPerPage(e.target.value);
      setCurrentPage(1);
    }
  }, pages.map((p, i) => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i,
      value: p
    }, p);
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "fl mr-1"
  }, "Go to page\xA0", /*#__PURE__*/_react.default.createElement("select", {
    onChange: e => {
      setCurrentPage(Number(e.target.value));
    }
  }, allPages.map(p => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: p,
      selected: currentPage === p + 1,
      value: p + 1
    }, p + 1);
  }))));
};

var _default = SelectPagination;
exports.default = _default;