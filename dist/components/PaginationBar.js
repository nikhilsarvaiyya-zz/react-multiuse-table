"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PaginationBar = _ref => {
  let {
    rmtPageLimit,
    recordPerPage,
    rmtData,
    setCurrentPage,
    currentPage,
    totalrecords
  } = _ref;
  const pages = Math.round(totalrecords / Number(recordPerPage));

  function goToNextPage() {
    setCurrentPage(page => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage(page => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / rmtPageLimit) * rmtPageLimit;
    return new Array(rmtPageLimit).fill().map((_, idx) => start + idx + 1);
  };

  console.log(typeof currentPage);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "rmtPagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: goToPreviousPage,
    className: "rmtPrev ".concat(currentPage === 1 ? 'disabled' : '')
  }, "prev"), getPaginationGroup().map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("button", {
      key: index,
      onClick: changePage,
      className: "rmtPaginationItem ".concat(currentPage === item ? 'active' : null)
    }, /*#__PURE__*/_react.default.createElement("span", null, item));
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: goToNextPage,
    className: "rmtNext ".concat(currentPage === pages ? 'disabled' : '')
  }, "next")));
};

var _default = PaginationBar;
exports.default = _default;