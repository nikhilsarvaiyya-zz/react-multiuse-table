"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TableHead = props => {
  const {
    headers,
    shortByKey,
    shortOrder,
    handleName,
    handleOrder,
    handleKeyIndex
  } = props;

  if (!headers) {
    return "Loading...";
  }

  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
    className: "tx-c"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  }))), headers.map((h, i) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      className: "cr-p",
      onClick: () => {
        handleName(h);
        handleOrder(h.key === shortByKey ? shortOrder : -shortOrder);
        handleKeyIndex(i);
      },
      key: i
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "lh-1"
    }, /*#__PURE__*/_react.default.createElement("label", {
      style: {
        height: "18px",
        padding: "5px"
      },
      className: "fl"
    }, h.label), /*#__PURE__*/_react.default.createElement("div", {
      className: "fr"
    }, shortByKey.key !== h.key && /*#__PURE__*/_react.default.createElement("img", {
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAAg0lEQVQ4jWNgGAU4QCIUUwWUMzAw/IfiemoaBsMd5BjEyMDA0IvFMBieClVDtGGT8BgGw7MYGBiYiDEwiAjDYDgQm2vQATMDA4MulMYH/jIwMFyG0nBAlJMpBRR5GRsgNlJmMpDgQ0LJZgoDCckGGVAtYSODMiTD6ig1DAaoWjgMMwAAZjtKHqTQNrUAAAAASUVORK5CYII="
    }), shortByKey.key === h.key && shortOrder === 1 && /*#__PURE__*/_react.default.createElement("img", {
      style: {
        margin: "2px"
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAxElEQVQ4jaXRTU5CMRSG4QeBRCWCBi8RF+HIObBVVoKSwEQXYZzo1KEEdGCvaUhvb41f0qSnp++b/vDPdDK9Pu7D/Am71KZuBp7jFpe4wSv2JYIeZqiitTNMguSQE9TwJCE+T0liQReLBjiWVHjBF5xEzeujYzelwrgujn9h6ucBc/nEW130okYHdxi2CD7wLlwhziIslox5ynyKxwJ4HfYmM8AqA29w0XJFAzw0wG3v85shthH8jKtSuM4IyzBGf4WL8w1I/jc6Uk9dWQAAAABJRU5ErkJggg=="
    }), shortByKey.key === h.key && shortOrder === -1 && /*#__PURE__*/_react.default.createElement("img", {
      style: {
        transform: "rotate(180deg)",
        margin: "2px"
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAxElEQVQ4jaXRTU5CMRSG4QeBRCWCBi8RF+HIObBVVoKSwEQXYZzo1KEEdGCvaUhvb41f0qSnp++b/vDPdDK9Pu7D/Am71KZuBp7jFpe4wSv2JYIeZqiitTNMguSQE9TwJCE+T0liQReLBjiWVHjBF5xEzeujYzelwrgujn9h6ucBc/nEW130okYHdxi2CD7wLlwhziIslox5ynyKxwJ4HfYmM8AqA29w0XJFAzw0wG3v85shthH8jKtSuM4IyzBGf4WL8w1I/jc6Uk9dWQAAAABJRU5ErkJggg=="
    }))));
  }), /*#__PURE__*/_react.default.createElement("th", {
    className: "tx-c"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4ElEQVQ4jaXSMUpDQRSF4S/RZ7ALSSnYCRbBwi1YuQAjxMLGRlJrZekWAkEEKwutDK7ApaSzsEkTUREs3iTImDcjyWmGuXfOP4c7Q7Xqid5ctWjfwiW28Yki1G/wkoPt4AmdqL6Ja1ykzAVGaCbOXOGwqtlDN5OwwGNcnA3qAM8ZwBfeRClngA28ZwACoLUIMEH7H4AtvC4CjHCSMTeVSadVB+6xW9Gr4w57uRsecIrGr3pHOf1vnMem+CfWcKR87zV8YIwBjsPaxzCVJKWzkKS/LOAPZH0JwG3w7a+SYq4fo1AfZnFyNMQAAAAASUVORK5CYII="
  })));
};

var _default = TableHead;
exports.default = _default;