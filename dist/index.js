"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

require("./../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MyTable = props => {
  if (!props.rmtHeaders || !props.rmtData) {
    return "Loading...";
  }

  let mapData = [];
  props.rmtData.forEach(d => {
    let selectedkey = [];
    props.rmtHeaders.forEach(h => {
      for (const [key, value] of Object.entries(d)) {
        if (h.key === key) {
          selectedkey.push(value);
        }
      }
    });
    mapData.push(selectedkey);
  });
  return /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, props.rmtHeaders.map((h, i) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: i
    }, h.label);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, mapData.map((d, i1) => {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: i1
    }, d.map((m, i2) => {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: i2
      }, m);
    }));
  })));
};

var _default = MyTable;
exports.default = _default;