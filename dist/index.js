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

require("./components/StyleBasic");

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
    rmtPagination,
    rmtPaginateSelection,
    rmtRecordPerPage,
    rmtHeading,
    rmtSubHeading,
    rmtCheckAll,
    rmtColumnSearch,
    rmtGlobalSearch,
    rmtActions,
    rmtQueryParams,
    rmtPageLimit,
    rmtTotalrecord,
    rmtServer,
    rmtResetData,
    rmtFullScreenMode,
    rmtToolbar,
    rmtDarkTheme,
    rmtArrangeHead,
    details
  } = props;
  let rpp = rmtRecordPerPage ? rmtRecordPerPage : 10;
  const [keyIndex, handleKeyIndex] = (0, _react.useState)(0);
  const [shortByKey, handleName] = (0, _react.useState)('name');
  const [shortOrder, handleOrder] = (0, _react.useState)(1);
  const [totalrecords, handleTotalRecords] = (0, _react.useState)(rmtTotalrecord ? rmtTotalrecord : 0);
  const [fullScreen, handleFullScreen] = (0, _react.useState)(false);
  const [columnSearch, handleColumnSearch] = (0, _react.useState)(rmtColumnSearch);
  const [columnSearchValue, handleColumnSearchValue] = (0, _react.useState)({}); //const [columnSearchArray, handleColumnSearchArray] = useState([]);

  const [globalSearch, handleGlobalSearch] = (0, _react.useState)(rmtGlobalSearch);
  const [globalSearchValue, handleGlobalSearchValue] = (0, _react.useState)('');
  const [darkMode, handleDarkMode] = (0, _react.useState)(false); // Need to Work
  //const [isActions, handleisActions] = useState(rmtActions && rmtActions.length !== 0);

  const [isActions] = (0, _react.useState)(rmtActions && rmtActions.length !== 0);
  const [checkAllAction, handleCheckAllAction] = (0, _react.useState)(false);
  const [checkSingleRow, handleCheckSingleRow] = (0, _react.useState)([]);
  const [currentPage, setCurrentPage] = (0, _react.useState)(1);
  const [pagnetData, handlePagnetData] = (0, _react.useState)([]);
  const [recordPerPage, handleRecordPerPage] = (0, _react.useState)(rpp);
  const [loadData, handleLoadData] = (0, _react.useState)(rmtData);
  const [stateHeaders, handleStateHeaders] = (0, _react.useState)({});
  console.log({
    stateHeaders,
    rmtHeaders
  });
  (0, _react.useEffect)(() => {
    rmtHeaders.forEach(header => {
      console.log(header, stateHeaders.heads);

      if (stateHeaders && stateHeaders.heads && header.key === stateHeaders.heads.key) {
        return header.listed = !header.listed;
      }
    });
    handleStateHeaders(rmtHeaders);
  }, [stateHeaders]);
  (0, _react.useEffect)(() => {
    let basic = {
      limit: Number(recordPerPage),
      skip: 10,
      order: Number(shortOrder),
      columnSearch: columnSearchValue,
      globalSearch: globalSearchValue
    };
    let all = {
      limit: Number(recordPerPage),
      skip: pagnetData.startIndex,
      shortByKey: shortByKey.key,
      shortByOrder: Number(shortOrder),
      columnSearch: columnSearchValue,
      globalSearch: globalSearchValue,
      fullScreen: fullScreen,
      darkMode: darkMode,
      isActions: isActions,
      checkAllAction: checkAllAction,
      checkSingleRow: checkSingleRow
    };

    if (rmtQueryParams && rmtServer) {
      rmtQueryParams(all, basic);
    }
  }, [recordPerPage, pagnetData, shortByKey, shortOrder, columnSearchValue, globalSearchValue, isActions]);
  (0, _react.useEffect)(() => {
    const startIndex = currentPage * Number(recordPerPage) - Number(recordPerPage);
    const endIndex = startIndex + Number(recordPerPage);
    handlePagnetData({
      startIndex,
      endIndex
    });
  }, [currentPage, recordPerPage]);
  const isPagination = rmtPagination === undefined || rmtPagination === true;

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
    className: "rmtMainContainer",
    id: "rmtMainContainer"
  }, rmtToolbar ? /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    rmtHeading: rmtHeading,
    rmtSubHeading: rmtSubHeading,
    rmtHeaders: rmtHeaders,
    handleStateHeaders: handleStateHeaders,
    stateHeaders: stateHeaders,
    openFullScreen: openFullScreen,
    closeFullScreen: closeFullScreen,
    fullScreen: fullScreen,
    handleFullScreen: handleFullScreen,
    rmtCheckAll: rmtCheckAll,
    rmtGlobalSearch: rmtGlobalSearch,
    globalSearchValue: globalSearchValue,
    globalSearch: globalSearch,
    handleGlobalSearch: handleGlobalSearch,
    isActions: isActions,
    columnSpan: columnSpan,
    handleColumnSearch: handleColumnSearch,
    columnSearch: columnSearch,
    handleGlobalSearchValue: handleGlobalSearchValue,
    handleDarkMode: handleDarkMode,
    darkMode: darkMode,
    rmtResetData: rmtResetData,
    rmtFullScreenMode: rmtFullScreenMode,
    rmtDarkTheme: rmtDarkTheme,
    columnSearchValue: columnSearchValue,
    handleColumnSearchValue: handleColumnSearchValue,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    rmtArrangeHead: rmtArrangeHead
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
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
    columnSpan: columnSpan,
    handleCheckAllAction: handleCheckAllAction
  }), columnSearch ? /*#__PURE__*/_react.default.createElement(_ColumnSearch.default, {
    headers: rmtHeaders,
    rmtCheckAll: rmtCheckAll,
    columnSearch: columnSearch,
    handleColumnSearch: handleColumnSearch,
    isActions: isActions,
    columnSpan: columnSpan,
    handleColumnSearchValue: handleColumnSearchValue,
    columnSearchValue: columnSearchValue,
    handlePagnetData: handlePagnetData,
    setCurrentPage: setCurrentPage
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
    isPagination: isPagination,
    globalSearchValue: globalSearchValue,
    checkAllAction: checkAllAction,
    handleCheckSingleRow: handleCheckSingleRow,
    checkSingleRow: checkSingleRow,
    columnSearchValue: columnSearchValue,
    pagnetData: pagnetData,
    totalrecords: totalrecords,
    handleTotalRecords: handleTotalRecords,
    handlePagnetData: handlePagnetData,
    rmtServer: rmtServer
  })), /*#__PURE__*/_react.default.createElement("tfoot", null))), isPagination && /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    rmtHeaders: rmtHeaders,
    rmtPaginateSelection: rmtPaginateSelection,
    rmtRecordPerPage: recordPerPage,
    totalrecords: totalrecords,
    rmtCheckAll: rmtCheckAll,
    isActions: isActions,
    columnSpan: columnSpan,
    rmtPageLimit: rmtPageLimit,
    rmtData: rmtData,
    handlePagnetData: handlePagnetData,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    recordPerPage: recordPerPage,
    handleRecordPerPage: handleRecordPerPage
  }));
};

var _default = MyTable;
exports.default = _default;