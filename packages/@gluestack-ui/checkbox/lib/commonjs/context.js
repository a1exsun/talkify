"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxContext = void 0;
exports.useCheckbox = useCheckbox;
exports.useCheckboxContext = void 0;
exports.useCheckboxProvider = useCheckboxProvider;
var _react = _interopRequireDefault(require("react"));
var _utils = require("@gluestack-ui/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CheckboxContext = exports.CheckboxContext = /*#__PURE__*/_react.default.createContext({});
function useCheckboxProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  var idCounter = 0;
  function uniqueId(prefix = '') {
    var id = ++idCounter;
    return prefix + id;
  }
  const idTemp = uniqueId();

  // Generate all the required ids
  const id = idProp || `field-${idTemp}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;

  /**
   * Track whether the `FormErrorMessage` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasFeedbackText, setHasFeedbackText] = _react.default.useState(false);

  /**
   * Track whether the `FormHelperText` has been rendered.
   * We use this to append its id the the `aria-describedby` of the `input`.
   */
  const [hasHelpText, setHasHelpText] = _react.default.useState(false);
  const context = {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps
  };
  return context;
}

/**
 * React hook that provides the props that should be spread on to
 * input fields (`input`, `select`, `textarea`, etc.).
 *
 * It provides a convenient way to control a form fields, validation
 * and helper text.
 */
function useCheckbox(props) {
  const field = useCheckboxContext();
  const describedBy = [];

  // Error message must be described first in all scenarios.
  if (field !== null && field !== void 0 && field.hasFeedbackText) describedBy.push(field === null || field === void 0 ? void 0 : field.feedbackId);
  if (field !== null && field !== void 0 && field.hasHelpText) describedBy.push(field === null || field === void 0 ? void 0 : field.helpTextId);
  const ariaDescribedBy = describedBy.join(' ');
  const {
    isInvalid,
    isDisabled,
    isReadOnly,
    isRequired,
    ...cleanProps
  } = props;
  let id = props === null || props === void 0 ? void 0 : props.id;
  if (!id && field !== null && field !== void 0 && field.id) {
    id = `${field === null || field === void 0 ? void 0 : field.id}-input`;
  }
  return {
    ...cleanProps,
    'id': id,
    'disabled': isDisabled || (field === null || field === void 0 ? void 0 : field.isDisabled),
    'readOnly': isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly),
    'required': isRequired || (field === null || field === void 0 ? void 0 : field.isRequired),
    'aria-invalid': (0, _utils.ariaAttr)(isInvalid || (field === null || field === void 0 ? void 0 : field.isInvalid)),
    'aria-required': (0, _utils.ariaAttr)(isRequired || (field === null || field === void 0 ? void 0 : field.isRequired)),
    'aria-readonly': (0, _utils.ariaAttr)(isReadOnly || (field === null || field === void 0 ? void 0 : field.isReadOnly)),
    'aria-describedby': ariaDescribedBy || undefined
  };
}
const useCheckboxContext = () => {
  return _react.default.useContext(CheckboxContext);
};
exports.useCheckboxContext = useCheckboxContext;
//# sourceMappingURL=context.js.map