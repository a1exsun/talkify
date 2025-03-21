"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRadio = void 0;
var _Radio = require("./Radio");
var _RadioIcon = require("./RadioIcon");
var _RadioIndicator = require("./RadioIndicator");
var _RadioLabel = require("./RadioLabel");
var _RadioGroup = require("./RadioGroup");
const createRadio = ({
  Root,
  Group,
  Icon,
  Indicator,
  Label
}) => {
  const Radio = (0, _Radio.Radio)(Root);
  Radio.Group = (0, _RadioGroup.RadioGroup)(Group);
  Radio.Label = (0, _RadioLabel.RadioLabel)(Label);
  Radio.Icon = (0, _RadioIcon.RadioIcon)(Icon);
  Radio.Indicator = (0, _RadioIndicator.RadioIndicator)(Indicator);
  Radio.displayName = 'Radio';
  Radio.Group.displayName = 'Radio.Group';
  Radio.Label.displayName = 'Radio.Label';
  Radio.Icon.displayName = 'Radio.Icon';
  Radio.Indicator.displayName = 'Radio.Indicator';
  return Radio;
};
exports.createRadio = createRadio;
//# sourceMappingURL=index.js.map