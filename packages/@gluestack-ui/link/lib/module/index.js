import { Link as LinkMain } from './Link';
import { LinkText } from './LinkText';
import { useLink } from './useLink';
const createLink = ({
  Root,
  Text
}) => {
  const Link = LinkMain(Root);
  //ts-ignore
  Link.Text = LinkText(Text);
  Link.Text.displayName = 'Link.Text';
  return Link;
};
export { createLink, useLink };
//# sourceMappingURL=index.js.map