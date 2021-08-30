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

var _TableCell = _interopRequireDefault(require("./TableCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    console.log(columnSearchValue);
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
    var nameA, nameB;

    if (typeof shortByKey.key === 'object') {
      nameA = a[shortByKey.key[0]];
      nameB = b[shortByKey.key[0]];
    } else {
      nameA = a[shortByKey.key];
      nameB = b[shortByKey.key];
    }

    return collator.compare(nameA, nameB);
  }).reverse();

  if (order === 1) {
    sortData = sortData.reverse();
  }

  if (isPagination) {
    handleTotalRecords(sortData.length);
    return sortData = sortData.slice(pagnetData.startIndex, pagnetData.endIndex);
  }

  return sortData;
}

const detailsOfRow = (data, handleIsModalOpen, columnSpan) => {
  let abc = /*#__PURE__*/_react.default.createElement("table", {
    className: "pd-1 db",
    style: {
      background: "#fafafa"
    }
  }, Object.entries(data).map((key, value) => {
    return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, key[0]), /*#__PURE__*/_react.default.createElement("td", null, key[1]));
  }));

  return /*#__PURE__*/_react.default.createElement("td", {
    colSpan: columnSpan
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pd-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "fr",
    onClick: () => handleIsModalOpen({
      open: false,
      index: null
    })
  }, "Close")), abc);
};

const TableBody = props => {
  let sortedData = [];
  const [isModalOpen, handleIsModalOpen] = (0, _react.useState)({});
  const [selectedData, handleSelectedData] = (0, _react.useState)({});
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

  return sortedData.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("tr", {
      key: i1,
      className: "cr-p",
      onClick: e => {
        handleIsModalOpen({
          open: isModalOpen.index === i1 ? !isModalOpen.open : true,
          index: i1
        });
        handleSelectedData(d);
      }
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
      return head.listed && /*#__PURE__*/_react.default.createElement(_TableCell.default, {
        headers: head,
        key: i2,
        cellData: d
      });
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
    }))))), isModalOpen.open && isModalOpen.index === i1 && detailsOfRow(d, handleIsModalOpen, columnSpan));
  });
};

var _default = TableBody;
exports.default = _default;