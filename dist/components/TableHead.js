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
    style: {
      padding: ".5em",
      border: "1px solid lightgrey",
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox"
  })), headers.map((h, i) => {
    return /*#__PURE__*/_react.default.createElement("th", {
      onClick: () => {
        handleName(h);
        handleOrder(h.key === shortByKey ? shortOrder : -shortOrder);
        handleKeyIndex(i);
      },
      style: {
        padding: ".5em",
        border: "1px solid lightgrey",
        cursor: "pointer",
        textAlign: "left"
      },
      key: i
    }, h.label, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        float: "right"
      }
    }, shortByKey.key !== h.key && /*#__PURE__*/_react.default.createElement("img", {
      style: {
        verticalAlign: "middle"
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAABmJLR0QA/wD/AP+gvaeTAAAAm0lEQVQ4je3TSwrCMBCA4U/wCnoLN7pQUPAB1lPo3QQv4d7bCOKD0qVumoW1alpdiT8MgZD5J2Qy/MnpYJuvH9HDHlccMKgrGuGUi0JcMKsqmuBcEIVIkcSKEmRPRCEyLIqJzRJZG7uIoq3Y29WiUbK3xCoid43Nu0OxbxbdhLHX3ZzHigJDHD3+s2lVUaDrfgL6dUWBr83mj3ADmtQ4D3mdLi0AAAAASUVORK5CYII="
    }), shortByKey.key === h.key && shortOrder === 1 && /*#__PURE__*/_react.default.createElement("img", {
      style: {
        verticalAlign: "middle"
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsUlEQVQokaXRQWrCQBSH8V/QjTcojQixh5AuuvMOrox0VfE+PU4P0XuU0kULXZjEzQSGmIwJfjCb9973nzcMdzBL9Ao8o8LPFHmNDRZY4h/fY+QiiFlUy/sCuvIqrJq55hF/oifE8gNeBkShnuMLvzCPmk0oDsntTJPojye+ZYv3zjZdzjjhQ8/gk/TfVxLP2oX0pudUKBPB4BAGY7HG2y2x5TUKqHEcK7aU+MR+qjiKC1J0JpMjvdeDAAAAAElFTkSuQmCC"
    }), shortByKey.key === h.key && shortOrder === -1 && /*#__PURE__*/_react.default.createElement("img", {
      style: {
        verticalAlign: "middle",
        transform: "rotate(180deg)"
      },
      src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABmJLR0QA/wD/AP+gvaeTAAAAsUlEQVQokaXRQWrCQBSH8V/QjTcojQixh5AuuvMOrox0VfE+PU4P0XuU0kULXZjEzQSGmIwJfjCb9973nzcMdzBL9Ao8o8LPFHmNDRZY4h/fY+QiiFlUy/sCuvIqrJq55hF/oifE8gNeBkShnuMLvzCPmk0oDsntTJPojye+ZYv3zjZdzjjhQ8/gk/TfVxLP2oX0pudUKBPB4BAGY7HG2y2x5TUKqHEcK7aU+MR+qjiKC1J0JpMjvdeDAAAAAElFTkSuQmCC"
    })));
  }), /*#__PURE__*/_react.default.createElement("th", {
    style: {
      padding: ".5em",
      border: "1px solid lightgrey"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA4ElEQVQ4jaXSMUpDQRSF4S/RZ7ALSSnYCRbBwi1YuQAjxMLGRlJrZekWAkEEKwutDK7ApaSzsEkTUREs3iTImDcjyWmGuXfOP4c7Q7Xqid5ctWjfwiW28Yki1G/wkoPt4AmdqL6Ja1ykzAVGaCbOXOGwqtlDN5OwwGNcnA3qAM8ZwBfeRClngA28ZwACoLUIMEH7H4AtvC4CjHCSMTeVSadVB+6xW9Gr4w57uRsecIrGr3pHOf1vnMem+CfWcKR87zV8YIwBjsPaxzCVJKWzkKS/LOAPZH0JwG3w7a+SYq4fo1AfZnFyNMQAAAAASUVORK5CYII="
  })));
};

var _default = TableHead;
exports.default = _default;