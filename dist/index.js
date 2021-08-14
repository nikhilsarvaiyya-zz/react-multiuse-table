"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TableHead = _interopRequireDefault(require("./components/TableHead.js"));

var _TableBody = _interopRequireDefault(require("./components/TableBody.js"));

var _Pagination = _interopRequireDefault(require("./components/Pagination.js"));

var _ColumnSearch = _interopRequireDefault(require("./components/ColumnSearch.js"));

var _StyleBasic = _interopRequireDefault(require("./components/StyleBasic"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var elem = document.documentElement;

function openFullScreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    /* IE11 */
    document.msExitFullscreen();
  }
}

const MyTable = props => {
  const {
    rmtData,
    rmtHeaders,
    rmtClass,
    pagination,
    paginateSelection,
    defaultSelection,
    rmtHeading,
    rmtSubHeading,
    rmtCheckAll,
    rmtColumnSearch,
    rmtGlobalSearch,
    rmtActions
  } = props;
  let selection = defaultSelection ? defaultSelection : 5;
  const [keyIndex, handleKeyIndex] = (0, _react.useState)(0);
  const [shortByKey, handleName] = (0, _react.useState)('name');
  const [shortOrder, handleOrder] = (0, _react.useState)(1);
  const [selectItem, handleSelectitem] = (0, _react.useState)(selection);
  const [totalrecords, handleTotalRecords] = (0, _react.useState)(0);
  const [fullScreen, handleFullScreen] = (0, _react.useState)(false);
  const [columnSearch, handleColumnSearch] = (0, _react.useState)(rmtColumnSearch);
  const [globalSearch, handleGlobalSearch] = (0, _react.useState)(rmtGlobalSearch);
  const [globalSearchValue, handleGlobalSearchValue] = (0, _react.useState)('');
  const [darkMode, handleDarkMode] = (0, _react.useState)(false); // Need to Work

  const [isActions, handleisActions] = (0, _react.useState)(rmtActions && rmtActions.length !== 0);
  const isPagination = pagination == undefined || pagination === true;

  if (!rmtHeaders) {
    return "Headers is not Provided";
  }

  let columnSpan = rmtHeaders.length;

  if (rmtCheckAll) {
    columnSpan = columnSpan + 1;
  }

  if (isActions) {
    columnSpan = columnSpan + 1;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rmtMainContainer"
  }, /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    rmtHeading: rmtHeading,
    rmtSubHeading: rmtSubHeading,
    rmtHeaders: rmtHeaders,
    openFullScreen: openFullScreen,
    closeFullScreen: closeFullScreen,
    fullScreen: fullScreen,
    handleFullScreen: handleFullScreen,
    rmtCheckAll: rmtCheckAll,
    globalSearch: globalSearch,
    handleGlobalSearch: handleGlobalSearch,
    isActions: isActions,
    columnSpan: columnSpan,
    handleColumnSearch: handleColumnSearch,
    columnSearch: columnSearch,
    handleGlobalSearchValue: handleGlobalSearchValue,
    handleDarkMode: handleDarkMode,
    darkMode: darkMode
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "rmtTableContainer"
  }, /*#__PURE__*/_react.default.createElement("table", {
    className: rmtClass,
    id: "rmtable"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_TableHead.default, {
    handleKeyIndex: handleKeyIndex,
    handleName: handleName,
    handleOrder: handleOrder,
    keyIndex: keyIndex,
    shortByKey: shortByKey,
    shortOrder: shortOrder,
    headers: rmtHeaders,
    rmtCheckAll: rmtCheckAll,
    columnSearch: columnSearch,
    handleColumnSearch: handleColumnSearch,
    isActions: isActions,
    columnSpan: columnSpan
  }), columnSearch ? /*#__PURE__*/_react.default.createElement(_ColumnSearch.default, {
    headers: rmtHeaders,
    rmtCheckAll: rmtCheckAll,
    columnSearch: columnSearch,
    handleColumnSearch: handleColumnSearch,
    isActions: isActions,
    columnSpan: columnSpan
  }) : null), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_TableBody.default, {
    shortByKey: shortByKey,
    shortOrder: shortOrder,
    rmtData: rmtData,
    rmtHeaders: rmtHeaders,
    rmtCheckAll: rmtCheckAll,
    rmtActions: rmtActions,
    isActions: isActions,
    columnSpan: columnSpan,
    keyIndex: keyIndex,
    selectItem: selectItem,
    isPagination: isPagination,
    globalSearchValue: globalSearchValue
  }), /*#__PURE__*/_react.default.createElement("tfoot", null)))), isPagination && /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    rmtHeaders: rmtHeaders,
    selectItem: selectItem,
    handleSelectitem: handleSelectitem,
    paginateSelection: paginateSelection,
    defaultSelection: selection,
    totalrecords: 20,
    rmtCheckAll: rmtCheckAll,
    isActions: isActions,
    columnSpan: columnSpan
  }));
};

var _default = MyTable;
exports.default = _default;