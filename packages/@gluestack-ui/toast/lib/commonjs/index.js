"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ToastProvider", {
  enumerable: true,
  get: function () {
    return _Toast.ToastProvider;
  }
});
exports.createToast = createToast;
exports.createToastHook = void 0;
var _Toast = require("./Toast");
var _ToastComponent = require("./ToastComponent");
var _ToastTitle = require("./ToastTitle");
var _ToastDescription = require("./ToastDescription");
const createToastHook = (AnimationWrapper, AnimatePresence) => {
  return (0, _Toast.getToastHook)(AnimationWrapper, AnimatePresence);
};
exports.createToastHook = createToastHook;
function createToast({
  Root,
  Title,
  Description
}) {
  const Toast = (0, _ToastComponent.ToastComponent)(Root);
  Toast.Title = (0, _ToastTitle.ToastTitle)(Title);
  Toast.Description = (0, _ToastDescription.ToastDescription)(Description);
  Toast.displayName = 'Toast';
  Toast.Title.displayName = 'Toast.Title';
  Toast.Description.displayName = 'Toast.Description';
  return Toast;
}
//# sourceMappingURL=index.js.map