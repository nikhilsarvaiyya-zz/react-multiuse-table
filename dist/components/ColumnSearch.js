"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ColumnSearch = props => {
  const {
    headers
  } = props;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    style: {
      padding: ".5em",
      border: "1px solid lightgrey",
      cursor: "pointer",
      textAlign: "left"
    }
  }), headers.map((h, i) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      style: {
        padding: ".5em",
        border: "1px solid lightgrey",
        cursor: "pointer",
        textAlign: "left"
      },
      key: i
    }, /*#__PURE__*/_react.default.createElement("input", {
      type: "search",
      style: {
        width: "100%",
        padding: "3px 5px"
      }
    }));
  }), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: ".5em",
      border: "1px solid lightgrey"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAV0lEQVQ4jWNgGExgOgMDgzQR6qShajGAOAMDw0YChkgQUoPPEIKa8RlCtGZsGkjWDAPSDAwMW6EYp2YmUk0lFlDkBWwaiDYEn0KChhBjC97ERnFSHhgAAP3XEqdC/dYtAAAAAElFTkSuQmCC"
  })));
};

var _default = ColumnSearch;
exports.default = _default;