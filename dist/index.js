"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _TableHead = _interopRequireDefault(require("./components/TableHead.js"));

var _TableBody = _interopRequireDefault(require("./components/TableBody.js"));

var _Pagination = _interopRequireDefault(require("./components/Pagination.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function sortFunction(arr, keyIndex, key, order, select, isPagination) {
  let sortData = arr.filter((f, i) => isPagination ? i < select : f).sort((a, b) => {
    if (a[keyIndex] === b[keyIndex]) {
      return 0;
    } else {
      return a[keyIndex] < b[keyIndex] ? -1 : 1;
    }
  });

  if (order === 1) {
    return sortData;
  } else {
    return sortData.reverse();
  }
}

function onPageChange(value) {
  return true;
}

const MyTable = props => {
  const {
    rmtData,
    rmtHeaders,
    rmtClass,
    pagination,
    paginateSelection,
    defaultSelection
  } = props;
  let selection = defaultSelection ? defaultSelection : 5;
  const [keyIndex, handleKeyIndex] = (0, _react.useState)(0);
  const [shortByKey, handleName] = (0, _react.useState)('name');
  const [shortOrder, handleOrder] = (0, _react.useState)(1);
  const [selectItem, handleSelectitem] = (0, _react.useState)(selection);
  const isPagination = pagination == undefined || pagination === true;

  if (!rmtHeaders || !rmtData) {
    return "Loading...";
  }

  let mapData = [];
  rmtData.forEach(d => {
    let selectedkey = [];
    rmtHeaders.forEach(h => {
      for (const [key, value] of Object.entries(d)) {
        if (h.key === key) {
          selectedkey.push(value);
        }
      }
    });
    mapData.push(selectedkey);
  });
  let sortedData = sortFunction(mapData, keyIndex, shortByKey, shortOrder, selectItem, isPagination);
  return /*#__PURE__*/_react.default.createElement("table", {
    className: rmtClass,
    style: {
      width: "100%",
      margin: "0",
      color: "#333",
      background: "white",
      border: "1px solid grey",
      fontSize: "12pt",
      fontFamily: "Verdana, sans-serif",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_TableHead.default, {
    handleKeyIndex: handleKeyIndex,
    handleName: handleName,
    handleOrder: handleOrder,
    keyIndex: keyIndex,
    shortByKey: shortByKey,
    shortOrder: shortOrder,
    headers: rmtHeaders
  })), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement(_TableBody.default, {
    shortByKey: shortByKey,
    shortOrder: shortOrder,
    data: sortedData
  })), isPagination && /*#__PURE__*/_react.default.createElement("tfoot", null, /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    rmtHeaders: rmtHeaders,
    selectItem: selectItem,
    handleSelectitem: handleSelectitem,
    paginateSelection: paginateSelection,
    defaultSelection: selection
  })));
};

var _default = MyTable;
exports.default = _default;