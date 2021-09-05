"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.match.js");

require("core-js/modules/es.regexp.constructor.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const na = () => {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "NA_text",
    title: "Not Available"
  }, "NA \xA0");
};

const subStr = text => {
  return /*#__PURE__*/_react.default.createElement("span", {
    key: text
  }, text.substring(0, 40), text && text.length > 40 ? "..." : '');
};

const strEllipsis = (text, headers, index) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "fl ws-nr",
    title: text
  }, customChanges(text)));
};

const arrEllipsis = (text, header, index) => {
  return /*#__PURE__*/_react.default.createElement("ul", {
    key: index
  }, text && Array.isArray(text) && text.map((m, i) => {
    return i < 3 && /*#__PURE__*/_react.default.createElement("li", {
      key: m + i,
      title: m
    }, " ", i !== 0 ? "," : null, " ", m);
  }), text && text.length > 4 ? " ..." : null);
};

const keyIsString = (text, headers, index) => {
  if (text === "null" || text === null) {
    return na();
  }

  if (typeof text === 'boolean') {
    if (headers.alternateOptions) {
      return text ? headers.alternateOptions[0] : headers.alternateOptions[1];
    } else {
      return text ? "Yes" : "No";
    }
  }

  if (typeof text === 'string') {
    return strEllipsis(text, headers, index);
  }

  if (typeof text === 'number') {
    return text;
  }

  if (typeof text === 'object') {
    return arrEllipsis(text, headers, index);
  }
};

const validImageUrl = data => {
  return data.match("(:jpg|gif|png)");
};

const validDate = data => {
  return new Date(data) !== "Invalid Date" && !isNaN(new Date(data));
};

const validUrl = data => {
  var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return !!pattern.test(data);
};

const customChanges = data => {
  if (validImageUrl(data)) {
    return /*#__PURE__*/_react.default.createElement("img", {
      // onError={(event) => {
      //     fallback(true)
      // }}
      alt: "image",
      className: "va-m",
      src: data,
      height: "30",
      style: {
        height: "22px",
        borderRadius: "500em",
        border: "1px solid #cccccc",
        background: "white"
      }
    });
  } else if (validDate(data)) {
    let date = new Date(data);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }

    if (month < 10) {
      month = '0' + month;
    }

    return year + '-' + month + '-' + dt;
  } else if (validUrl(data)) {
    let url = data.indexOf('://') === -1 ? 'http://' + data : data;
    return /*#__PURE__*/_react.default.createElement("a", {
      rel: "noreferrer",
      onClick: e => e.preventDefault(),
      target: "_blank",
      href: url
    }, subStr(url));
  } else {
    return subStr(data);
  }
};

const keyIsObject = (data, headers, index) => {
  return headers.key && headers.key.map((item, i) => {
    if (data[0] === item) {
      if (!data[1]) {
        return na();
      } else {
        if (typeof data[1] === 'object') {
          return arrEllipsis(data[1], item, index);
        } else {
          if (headers.seprator && i !== headers.key.length - 1) {
            return /*#__PURE__*/_react.default.createElement("span", null, customChanges(data[1], item, index), "\xA0", headers.seprator, "\xA0 ");
          } else {
            return /*#__PURE__*/_react.default.createElement("span", null, customChanges(data[1], item, index), "\xA0 ");
          }
        }
      }
    }
  });
};

const TableCell = props => {
  const {
    cellData,
    headers
  } = props;
  const columnStyle = headers.columnStyle;
  const cellStyle = headers.cellStyle ? cellData.cellStyle : "";
  return /*#__PURE__*/_react.default.createElement("td", {
    style: _objectSpread(_objectSpread({}, cellStyle), columnStyle)
  }, Object.entries(cellData).map((k, i3) => {
    if (typeof headers.key === 'object') {
      return keyIsObject(k, headers, i3);
    } else if (typeof headers.key === 'string') {
      if (k[0] === headers.key) {
        return keyIsString(k[1], headers, i3);
      }
    }
  }));
};

var _default = TableCell;
exports.default = _default;