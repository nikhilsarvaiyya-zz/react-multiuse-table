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
    handleSelectitem,
    rmtPaginateSelection,
    rmtRecordPerPage,
    totalrecords,
    rmtData,
    rmtPageLimit,
    handlePagnetData,
    currentPage,
    setCurrentPage,
    recordPerPage,
    handleRecordPerPage
  } = props;
  let pages;

  if (rmtPaginateSelection) {
    pages = rmtPaginateSelection;
  } else {
    pages = [5, 10, 15, 20];
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rmtPagnation"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fl w-50"
  }, /*#__PURE__*/_react.default.createElement(_SelectPagination.default, {
    pages: pages,
    rmtRecordPerPage: rmtRecordPerPage,
    handleSelectitem: handleSelectitem,
    totalrecords: totalrecords,
    currentPage: currentPage,
    recordPerPage: recordPerPage,
    setCurrentPage: setCurrentPage,
    handleRecordPerPage: handleRecordPerPage
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "fr w-50 tx-r"
  }, /*#__PURE__*/_react.default.createElement(_PaginationBar.default, {
    rmtData: rmtData,
    rmtPageLimit: rmtPageLimit,
    rmtRecordPerPage: rmtRecordPerPage,
    handlePagnetData: handlePagnetData,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    recordPerPage: recordPerPage,
    totalrecords: totalrecords
  })));
};

var _default = Pagination;
exports.default = _default;