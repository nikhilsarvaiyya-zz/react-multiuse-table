"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const RowDetail = (data, handleIsModalOpen, columnSpan) => {
  let abc = /*#__PURE__*/React.createElement("table", {
    className: "pd-1 db",
    style: {
      background: "#fafafa"
    }
  }, Object.entries(data).map((key, value) => {
    console.log(JSON.stringify(key[1]));
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: {
        minWidth: "120px"
      }
    }, key[0]), /*#__PURE__*/React.createElement("td", null, typeof key[1] === "boolean" ? key[1] ? "Yes" : "No" : typeof key[1] === "object" ? /*#__PURE__*/React.createElement("pre", null, JSON.stringify(key[1])) : key[1]));
  }));
  return /*#__PURE__*/React.createElement("td", {
    colSpan: columnSpan
  }, /*#__PURE__*/React.createElement("div", {
    className: "pd-1"
  }, /*#__PURE__*/React.createElement("button", {
    className: "fr",
    onClick: () => handleIsModalOpen({
      open: false,
      index: null
    })
  }, "Close")), abc);
};

var _default = RowDetail;
exports.default = _default;