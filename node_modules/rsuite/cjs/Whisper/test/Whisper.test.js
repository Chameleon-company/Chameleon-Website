"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _tsExpect = require("ts-expect");

var _Whisper = _interopRequireDefault(require("../Whisper"));

var _whisperRef$current, _whisperRef$current2, _whisperRef$current3, _whisperRef$current4, _whisperRef$current5;

var whisperRef = /*#__PURE__*/_react.default.createRef();

/*#__PURE__*/
_react.default.createElement(_Whisper.default, {
  ref: whisperRef,
  speaker: /*#__PURE__*/_react.default.createElement("div", null)
}, /*#__PURE__*/_react.default.createElement("div", null));

(_whisperRef$current = whisperRef.current) === null || _whisperRef$current === void 0 ? void 0 : _whisperRef$current.open();
(_whisperRef$current2 = whisperRef.current) === null || _whisperRef$current2 === void 0 ? void 0 : _whisperRef$current2.open(300);
(_whisperRef$current3 = whisperRef.current) === null || _whisperRef$current3 === void 0 ? void 0 : _whisperRef$current3.close();
(_whisperRef$current4 = whisperRef.current) === null || _whisperRef$current4 === void 0 ? void 0 : _whisperRef$current4.close(300);
(_whisperRef$current5 = whisperRef.current) === null || _whisperRef$current5 === void 0 ? void 0 : _whisperRef$current5.updatePosition(); // speaker function types

/*#__PURE__*/
_react.default.createElement(_Whisper.default, {
  speaker: function speaker(props, ref) {
    (0, _tsExpect.expectType)(props.arrowOffsetLeft);
    (0, _tsExpect.expectType)(props.arrowOffsetLeft);
    (0, _tsExpect.expectType)(props.onMouseEnter);
    (0, _tsExpect.expectType)(props.onMouseLeave);
    (0, _tsExpect.expectType)(props.onClose);
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      ref: ref
    }, props));
  }
}, /*#__PURE__*/_react.default.createElement("div", null));