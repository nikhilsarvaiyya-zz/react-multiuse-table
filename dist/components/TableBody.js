"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.sort.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleSortKey(sortBy, sortOrder, arr) {
  arr.sort((a, b) => a.sortBy - b.sortBy);
  return arr;
}

const TableBody = props => {
  if (!props.data) {
    return "Loading...";
  }

  return props.data.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i1
    }, d.map((m, i2) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i2,
        style: {
          padding: ".5em",
          border: "1px solid lightgrey"
        }
      }, m);
    }));
  });
};

var _default = TableBody;
exports.default = _default;