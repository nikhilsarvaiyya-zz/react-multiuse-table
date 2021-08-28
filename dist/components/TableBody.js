"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function sortFunction(arr, shortByKey, order, select, isPagination, globalSearchValue, checkAllAction, columnSearchValue, pagnetData, handleTotalRecords) {
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  });
  let sortData = arr;
  sortData.map((item, i) => {
    item.isChecked = checkAllAction;
    item.rowKey = i;
    return item;
  });

  if (globalSearchValue.length > 0) {
    sortData = sortData.filter((f, i) => {
      let ky = Object.entries(f);
      let key1 = ky[0][0];
      let key2 = ky[0][0];
      let value1 = ky[0][1];
      let value2 = ky[0][2];

      if (typeof value1 !== 'number') {
        return key1.toLowerCase().includes(value1);
      } else {
        return key2.toLowerCase().includes(value2);
      }
    });
  }

  if (columnSearchValue && Object.keys(columnSearchValue).length !== 0) {
    sortData = sortData.filter((f, i) => {
      let ky = Object.entries(columnSearchValue);
      let key = ky[0][0];
      let value = ky[0][1].toLowerCase();

      if (typeof f[key] !== "number") {
        return f && f[key] && f[key].toLowerCase().includes(value);
      } else {
        return f && f[key] === value;
      }
    });
  }

  sortData.sort((a, b) => {
    var nameA = a[shortByKey.key],
        nameB = b[shortByKey.key];
    return collator.compare(nameA, nameB);
  }).reverse();
  sortData.sort((a, b) => {
    var nameA = a[shortByKey.key],
        nameB = b[shortByKey.key];
    return collator.compare(nameA, nameB);
  });

  if (order === 1) {
    sortData = sortData.reverse();
  }

  if (isPagination) {
    handleTotalRecords(sortData.length);
    return sortData = sortData.slice(pagnetData.startIndex, pagnetData.endIndex);
  }

  return sortData;
}

const TableBody = props => {
  let sortedData = [];
  const {
    rmtCheckAll,
    rmtActions,
    rmtHeaders,
    rmtData,
    columnSpan,
    shortByKey,
    shortOrder,
    recordPerPage,
    isPagination,
    globalSearchValue,
    checkAllAction,
    handleCheckSingleRow,
    checkSingleRow,
    columnSearchValue,
    pagnetData,
    handleTotalRecords,
    rmtServer
  } = props;

  if (rmtServer) {
    sortedData = rmtData;
  } else {
    sortedData = sortFunction(rmtData, shortByKey, shortOrder, recordPerPage, isPagination, globalSearchValue, checkAllAction, columnSearchValue, pagnetData, handleTotalRecords);
  }

  if (!rmtData) {
    return /*#__PURE__*/_react.default.createElement("td", {
      colSpan: columnSpan,
      className: "mr-1"
    }, "Loading...");
  }

  const formateText = (text, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: index,
      className: "overflow-200"
    }, text ? text : /*#__PURE__*/_react.default.createElement("span", {
      style: {
        opacity: "20%"
      }
    }, "NA"), " ");
  };

  return sortedData.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i1
    }, rmtCheckAll && /*#__PURE__*/_react.default.createElement("th", {
      className: "tx-c p-s l-0",
      style: {
        boxShadow: "rgb(0 0 0) -1px 0px 8px -8px inset"
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      value: i1,
      type: "checkbox",
      defaultChecked: d.isChecked,
      onChange: e => {
        if (e.target.checked) {
          handleCheckSingleRow([...checkSingleRow, d]);
        } else {
          let findIndex = checkSingleRow.findIndex(x => x.rowKey === i1);
          checkSingleRow.splice(findIndex, 1);
          handleCheckSingleRow([...checkSingleRow]);
        }
      }
    }))), rmtHeaders.map((head, i2) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i2
      }, Object.entries(d).map((k, i3) => {
        if (k[0] === head.key) {
          return formateText(k[1], i3);
        }
      }));
    }), rmtActions && rmtActions.length !== 0 && /*#__PURE__*/_react.default.createElement("th", {
      className: "tx-c p-s r-0",
      style: {
        boxShadow: "rgb(0 0 0) 1px 0px 8px -8px inset"
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown"
    }, /*#__PURE__*/_react.default.createElement("button", {
      className: "dropbtn"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "Dropdown Menu",
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg=="
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-content"
    }, rmtActions.map((a, i) => {
      return /*#__PURE__*/_react.default.createElement("a", {
        key: i,
        href: a.label
      }, a.label);
    })))));
  });
};

var _default = TableBody;
exports.default = _default;