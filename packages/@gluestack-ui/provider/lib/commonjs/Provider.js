"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _interactions = require("@react-native-aria/interactions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Provider = ({
  StyledProvider
}) => {
  const ProviderImpl = ({
    children,
    ...props
  }) => {
    _react.default.useEffect(() => {
      let escapeKeyListener = null;
      if (_reactNative.Platform.OS === 'web') {
        escapeKeyListener = e => {
          if (e.key === 'Escape') {
            if (_interactions.keyboardDismissHandlerManager.length() > 0) {
              const lastHandler = _interactions.keyboardDismissHandlerManager.pop();
              lastHandler();
            }
          }
        };
        document.addEventListener('keydown', escapeKeyListener);
      }
      return () => {
        if (_reactNative.Platform.OS === 'web') {
          document.removeEventListener('keydown', escapeKeyListener);
        }
      };
    }, []);
    return /*#__PURE__*/_react.default.createElement(StyledProvider, props, children);
  };
  return ProviderImpl;
};
exports.Provider = Provider;
//# sourceMappingURL=Provider.js.map