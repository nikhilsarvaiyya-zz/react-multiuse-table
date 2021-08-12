"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PaginationBar = props => {
  const {
    defaultSelection,
    handleSelectitem,
    pages
  } = props;
  return /*#__PURE__*/_react.default.createElement("ul", {
    style: {
      display: "inline-block",
      padding: "0",
      margin: "0",
      float: "right"
    }
  }, /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "\xAB")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "1")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "2")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "...")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "6")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "7")), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    style: {
      float: "left",
      padding: "8px 16px",
      textDecoration: "none",
      color: "inherit"
    },
    href: "tryit.asp-filename=trycss_ex_pagination.html#"
  }, "\xBB")));
};

var _default = PaginationBar;
exports.default = _default;