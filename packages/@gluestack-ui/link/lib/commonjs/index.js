"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLink = void 0;
Object.defineProperty(exports, "useLink", {
  enumerable: true,
  get: function () {
    return _useLink.useLink;
  }
});
var _Link = require("./Link");
var _LinkText = require("./LinkText");
var _useLink = require("./useLink");
const createLink = ({
  Root,
  Text
}) => {
  const Link = (0, _Link.Link)(Root);
  //ts-ignore
  Link.Text = (0, _LinkText.LinkText)(Text);
  Link.Text.displayName = 'Link.Text';
  return Link;
};
exports.createLink = createLink;
//# sourceMappingURL=index.js.map