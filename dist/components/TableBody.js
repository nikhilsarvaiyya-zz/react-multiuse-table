"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortFunction(arr, keyIndex, key, order, select, isPagination, globalSearchValue) {
  var collator = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base'
  });
  let sortData = arr;

  if (isPagination) {
    sortData = sortData.filter((f, i) => i < select);
  }

  if (globalSearchValue.length > 0) {
    sortData = sortData.filter((f, i) => {
      return f[0].includes(globalSearchValue);
    });
  }

  sortData.sort((a, b) => {
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

const TableBody = props => {
  const {
    rmtCheckAll,
    rmtActions,
    rmtHeaders,
    rmtData,
    columnSpan,
    keyIndex,
    shortByKey,
    shortOrder,
    selectItem,
    isPagination,
    globalSearchValue
  } = props;
  console.log(globalSearchValue);

  if (!rmtData) {
    return /*#__PURE__*/_react.default.createElement("td", {
      colSpan: columnSpan,
      className: "mr-1"
    }, "Loading...");
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
  let sortedData = sortFunction(mapData, keyIndex, shortByKey, shortOrder, selectItem, isPagination, globalSearchValue);
  return sortedData.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i1
    }, rmtCheckAll && /*#__PURE__*/_react.default.createElement("th", {
      className: "tx-c p-s l-0",
      style: {
        boxShadow: "rgb(0 0 0) -1px 0px 8px -8px inset"
      }
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox"
    }))), d.map((m, i2) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i2
      }, " ", m, " ");
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
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVQ4jc2SwQ1AQBREX5BogiJQgxroRA1utEMPbq4uqnAQDjaxlz8JBzHJJD/5s7OZ2YU/IwVGx+SNQQscjq0lCoTBZMyPUAC5EkRiFwMlV4QZ2J7e3nB30Fgi1YGPw1qoCJ13uLdEoTDYuXIvwCp0JmruDipLpDrIvFk+pYUEGBxffeVvcAIAMhhp+VgEPQAAAABJRU5ErkJggg=="
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "dropdown-content"
    }, rmtActions.map((a, i) => {
      return /*#__PURE__*/_react.default.createElement("a", {
        key: i,
        href: "#"
      }, a.label);
    })))));
  });
};

var _default = TableBody;
exports.default = _default;