"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createButton = createButton;
var _Button = require("./Button");
var _ButtonGroup = require("./ButtonGroup");
var _ButtonText = require("./ButtonText");
var _ButtonSpinner = require("./ButtonSpinner");
var _ButtonIcon = require("./ButtonIcon");
function createButton({
  Root,
  Text,
  Group,
  Spinner,
  Icon
}) {
  const Button = (0, _Button.Button)(Root);
  Button.Text = (0, _ButtonText.ButtonText)(Text);
  Button.Group = (0, _ButtonGroup.ButtonGroup)(Group);
  Button.Spinner = (0, _ButtonSpinner.ButtonSpinner)(Spinner);
  Button.Icon = (0, _ButtonIcon.ButtonIcon)(Icon);
  Button.displayName = 'Button';
  Button.Text.displayName = 'Button.Text';
  Button.Group.displayName = 'Button.Group';
  Button.Spinner.displayName = 'Button.Spinner';
  Button.Icon.displayName = 'Button.Icon';
  return Button;
}
//# sourceMappingURL=index.js.map