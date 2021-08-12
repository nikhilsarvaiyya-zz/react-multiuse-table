"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableHeader = props => {
  const {
    rmtHeaders,
    heading,
    subHeading
  } = props;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: rmtHeaders.length + 2,
    style: {
      padding: ".5em",
      border: "1px solid lightgrey",
      textAlign: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("strong", null, heading)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: "right"
    }
  }, /*#__PURE__*/_react.default.createElement("ul", {
    style: {
      listStyle: "none",
      display: "inline"
    }
  }, /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline",
      padding: "2px",
      margin: "0 0 0 5px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAuElEQVQ4jdXSMWqCMQDF8Z9WcSjFwd7CKyhIceomegDBsYfQimfQW7jqWEpxaMHZM6gIinS1g/nKN3wRR/3DgyQv75GEcIsU0cMXtjhggbfg1YIyecYPZmiignIYz7HEBIOscB7feL9wuiFO6YJCymzjiH4kfLpQ/M/TNZvun+g1B84PlSjGBzrJJB8pykXCI5QwTRYeUmYDK7yghTV2eEQdY1Txit+s9mZQ0fnbLrDHBp/oBu/G+ANI2SCkCXAwFQAAAABJRU5ErkJggg=="
  })), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline",
      padding: "2px",
      margin: "0 0 0 5px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAa0lEQVQ4jc2SQQ6AIAwEJ/5HDspnxP/f6As0gYNN5ICBhmjcY3eyNGXhT9oBARJwAK7wnM6SMqEWIMDS8dAKxJqR+pe92akYnoaAKjsbAizsh/Kj7PARh79RuErSkuehSEGNVpUjsBm2fVkZh9sa61aJuakAAAAASUVORK5CYII="
  })), /*#__PURE__*/_react.default.createElement("li", {
    style: {
      display: "inline",
      padding: "2px",
      margin: "0 0 0 5px",
      cursor: "pointer"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAApElEQVQ4jb2SXQrCMBCEP3/yXqWXEHxoyS2qDzlAb+1F9AC2vmx12SYrBHQgLJmZLLNh4QfYAZcMfxXtKzpgBg6KOwrXWfO2kEBX7Vsl2EsNwFmMJyfdoj2Bm1QAkkTUp1UP24w+AGyUqTH3uxgXX6O0CXg4Sf+I2hFm0d+o+cSkGwSgByIwOg1G8fR8VmCF6DSI1pzbxMnUEldEwMwnSDixq/EC9+wq3CrMRXcAAAAASUVORK5CYII="
  })))))));
};

var _default = TableHeader;
exports.default = _default;