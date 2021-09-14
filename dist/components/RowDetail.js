"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RowDetail = (data, handleIsModalOpen, columnSpan) => {
  let abc = /*#__PURE__*/_react.default.createElement("table", {
    className: "pd-1 db",
    style: {
      background: "#fafafa"
    }
  }, Object.entries(data).map((key, value) => {
    console.log(JSON.stringify(key[1]));
    return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
      style: {
        minWidth: "120px"
      }
    }, key[0]), /*#__PURE__*/_react.default.createElement("td", null, typeof key[1] === "boolean" ? key[1] ? "Yes" : "No" : typeof key[1] === "object" ? /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(key[1])) : key[1]));
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

var _default = RowDetail;
exports.default = _default;