"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const na = () => {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "NA_text"
  }, "NA \xA0");
};

const arrEllipsis = text => {
  return /*#__PURE__*/_react.default.createElement("ul", null, text && text.map((m, i) => {
    return i < 3 && /*#__PURE__*/_react.default.createElement("li", null, " ", i !== 0 ? "," : null, " ", m);
  }), text && text.length > 4 ? " ..." : null);
};

const keyIsString = (text, headers) => {
  if (text === "null" || text === null) {
    return na();
  }

  if (typeof text === 'boolean') {
    if (headers.displayValue) {
      return text ? headers.displayValue[0] : headers.displayValue[1];
    } else {
      return text ? "Yes" : "No";
    }
  }

  if (typeof text === 'string') {
    return text;
  }

  if (typeof text === 'number') {
    return text;
  }

  if (typeof text === 'object') {
    return arrEllipsis(text);
  }
};

const keyIsObject = (data, headers) => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dib",
    style: headers.cellStyle ? headers.cellStyle : {}
  }, " ", headers.key && headers.key.map((item, i) => {
    if (data[0] === item) {
      if (!data[1]) {
        return na();
      } else {
        if (typeof data[1] === 'object') {
          return arrEllipsis(data[1]);
        } else {
          if (headers.seprator && i !== headers.key.length - 1) {
            return /*#__PURE__*/_react.default.createElement("span", null, data[1], "\xA0", headers.seprator, "\xA0 ");
          } else {
            return /*#__PURE__*/_react.default.createElement("span", null, data[1], "\xA0 ");
          }
        }
      }
    }
  }));
};

const TableCell = props => {
  const {
    cellData,
    headers
  } = props; // const formateText = (text) => {
  //     return <div key={index} className="overflow-200">{text ? text : <span style={{ opacity: "20%" }}>NA</span>} </div>
  // }

  return /*#__PURE__*/_react.default.createElement("td", null, Object.entries(cellData).map((k, i3) => {
    if (typeof headers.key === 'object') {
      return keyIsObject(k, headers);
    } else if (typeof headers.key === 'string') {
      if (k[0] === headers.key) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "dib",
          style: headers.cellStyle ? headers.cellStyle : {}
        }, keyIsString(k[1], headers));
      }
    }
  }));
};

var _default = TableCell;
exports.default = _default;