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

var _ColumnSearch = _interopRequireDefault(require("./components/ColumnSearch.js"));

var _TableHeader = _interopRequireDefault(require("./components/TableHeader.js"));

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
  const [totalrecords, handleTotalRecords] = (0, _react.useState)(0);
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
    className: rmtClass
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement(_TableHeader.default, {
    heading: "Heading",
    subHeading: "All staf listed in this area",
    rmtHeaders: rmtHeaders
  }), /*#__PURE__*/_react.default.createElement(_TableHead.default, {
    handleKeyIndex: handleKeyIndex,
    handleName: handleName,
    handleOrder: handleOrder,
    keyIndex: keyIndex,
    shortByKey: shortByKey,
    shortOrder: shortOrder,
    headers: rmtHeaders
  }), /*#__PURE__*/_react.default.createElement(_ColumnSearch.default, {
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
    defaultSelection: selection,
    totalrecords: mapData.length
  })));
};

document.head.innerHTML += "\n  <style>\n  table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 100%;\n    color:#444444;\n   \n    font-size:14px\n  }\n  \n  td, th {\n    border: 1px solid #efefef;\n    text-align: left;\n    padding: 8px;\n  }\n  th{\n    background:#fafafa\n  }\n  thead{\n\n  }\n  tbody{\n\n   }\n  ul{\n      list-style:none;\n      display:block;\n      margin:0;\n      padding:0\n  }\n  ul li{\n    display:inline-block\n  }\n  ul li a{\n    margin:0 3px;\n    padding:5px 10px;\n    text-decoration:none;\n    color:inherit;\n    display:inline-block\n   \n    \n  }\n  ul li a:hover,\n  ul li a.active\n  {\n    background:#efefef\n  }\n  input[type=\"text\" i],\n  input[type=\"search\" i]{\n      width:100%;\n      padding:5px;\n      border:1px solid #cccccc\n    }\n\n    input[type=\"checkbox\" ]{\n      \n        border:1px solid #cccccc\n        \n    }\n\n    select{\n        padding:3px 6px 3px 3px\n    }\n\n    div{\n        display:block\n    }\n    .lh-1{\n        line-height:1em\n    }\n    .lh-2{\n        line-height:2em\n    }\n\n    .fl{\n        float:left\n    }\n    .fr{\n        float:right\n    }\n    .db{\n        display:block\n    }\n    .dib{\n        display:inline-block\n    }\n    .ml-1{\n        margin-left:1em\n    }\n    .ml-2{\n        margin-left:2em\n    }\n    .mr-1{\n        margin-right:1em\n    }\n    .mr-2{\n        margin-right:2em\n    }\n    .pd-05{\n        padding:0.5em\n    }\n    .pd-1{\n        padding:1em\n    }\n   \n    .w-100{\n        width:100%\n    }\n   \n    .cr-p{\n        cursor:pointer\n    }\n    .tx-c{\n        text-align:center\n    }\n    .dropdown {\n         float:right;\n          position: relative;\n          display: inline-block;\n        }\n        \n\n        .dropdown .dropbtn {\n            background:none;\n            border:none;\n            border-radius: 4px;\n            padding: 2px;\n          }\n          .dropdown .dropbtn img{\n            vertical-align:middle\n          }\n\n          .dropdown:hover .dropbtn {\n            background:#e5e5e5;\n            cursor:pointer \n          }\n        \n        .dropdown-content {\n          display: none;\n          right:20px;\n          top:0px;\n          position: absolute;\n          background-color: #f9f9f9;\n          min-width: 160px;\n          box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);\n          z-index: 1;\n          border-radius:2px\n        }\n        \n        .dropdown-content a {\n          color: black;\n          padding: 8px 5px;\n          text-decoration: none;\n          display: block;\n          border-bottom:1px solid #ccc;\n         text-align:left\n        }\n        \n        .dropdown-content a:hover {background-color: #f1f1f1}\n        \n        .dropdown:hover .dropdown-content {\n          display: block;\n        }\n        \n        \n  </style>";
var _default = MyTable;
exports.default = _default;