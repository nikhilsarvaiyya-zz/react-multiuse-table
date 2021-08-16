"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.array.reverse.js");

require("core-js/modules/es.array.sort.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortFunction(arr, shortByKey, order, select, isPagination, globalSearchValue, checkAllAction, columnSearchValue) {
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
        return f && f[key] == value;
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

  if (order === -1) {
    sortData = sortData.reverse();
  }

  if (isPagination) {
    return sortData = sortData.filter((f, i) => {
      return i < select;
    });
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
    globalSearchValue,
    checkAllAction,
    handleCheckSingleRow,
    checkSingleRow,
    columnSearchValue
  } = props;

  if (!rmtData) {
    return /*#__PURE__*/_react.default.createElement("td", {
      colSpan: columnSpan,
      className: "mr-1"
    }, "Loading...");
  }

  rmtData.map((item, i) => {
    return false;
  });
  let sortedData = sortFunction(rmtData, shortByKey, shortOrder, selectItem, isPagination, globalSearchValue, checkAllAction, columnSearchValue);

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
          let findIndex = checkSingleRow.findIndex(x => x.rowKey == i1);
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