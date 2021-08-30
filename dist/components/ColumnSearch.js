"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dropdown = (h, handleColumnSearchValue, setCurrentPage) => {
  return /*#__PURE__*/_react.default.createElement("select", {
    className: "w-100",
    onChange: e => {
      handleColumnSearchValue({
        [h.key]: e.target.value
      });
      setCurrentPage(1);
    }
  }, h.options.map(s => {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: s,
      value: s
    }, s);
  }));
};

const inputSearch = (h, columnSearchValue, handleColumnSearchValue, setCurrentPage) => {
  let key = '';

  if (typeof h.key === 'object') {
    key = h.key[0];
  } else {
    key = h.key;
  }

  return /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: " ".concat(h.label),
    value: key === Object.keys(columnSearchValue)[0] ? Object.keys(columnSearchValue)[1] : '',
    onChange: e => {
      console.log(e.target.value);
      handleColumnSearchValue({
        [key]: e.target.value
      });
      setCurrentPage(1);
    }
  });
};

const ColumnSearch = props => {
  const {
    headers,
    rmtCheckAll,
    handleColumnSearch,
    columnSearch,
    handleColumnSearchValue,
    columnSearchValue,
    setCurrentPage,
    isActions
  } = props;
  let emptyTh = rmtCheckAll ? /*#__PURE__*/_react.default.createElement("th", {
    className: "tx-c p-s l-0"
  }, " ") : null;
  return /*#__PURE__*/_react.default.createElement("tr", null, emptyTh, headers.map((h, i) => {
    return h.listed ? /*#__PURE__*/_react.default.createElement("th", {
      key: i
    }, h.options ? dropdown(h, handleColumnSearchValue, setCurrentPage) : inputSearch(h, columnSearchValue, handleColumnSearchValue, setCurrentPage)) : null;
  }), isActions && /*#__PURE__*/_react.default.createElement("th", {
    className: "tx-c p-s r-0"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Column Filter",
    onClick: () => handleColumnSearch(false),
    className: "cr-p",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC"
  })));
};

var _default = ColumnSearch;
exports.default = _default;