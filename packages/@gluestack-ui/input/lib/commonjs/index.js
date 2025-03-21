"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInput = void 0;
var _InputIcon = require("./InputIcon");
var _InputGroup = require("./InputGroup");
var _InputSlot = require("./InputSlot");
var _Input = require("./Input");
const createInput = ({
  Root,
  Icon,
  Slot,
  Input
}) => {
  const InputField = (0, _InputGroup.InputGroup)(Root);
  InputField.Icon = (0, _InputIcon.InputIcon)(Icon);
  InputField.Slot = (0, _InputSlot.InputSlot)(Slot);
  InputField.Input = (0, _Input.Input)(Input);
  InputField.displayName = 'InputField';
  InputField.Icon.displayName = 'InputField.Icon';
  InputField.Input.displayName = 'InputField.Input';
  InputField.Slot.displayName = 'InputField.Slot';
  return InputField;
};
exports.createInput = createInput;
//# sourceMappingURL=index.js.map