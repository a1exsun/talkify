import { Linking, Platform } from 'react-native';
const linkToHREF = URL => {
  Linking.openURL(URL).catch(err => console.error('An error occurred', err));
};
const addOnPressFunctionality = (href, callback) => {
  href ? linkToHREF(href) : '';
  callback ? callback() : () => {};
};
export function useLink(props) {
  const {
    href,
    isExternal,
    onPress,
    _ref,
    isDisabled
  } = props;
  let platformLinkProps = {};
  if (Platform.OS === 'web') {
    platformLinkProps = {
      'href': isDisabled ? undefined : href,
      'onPress': isDisabled ? undefined : onPress,
      'aria-disabled': isDisabled,
      'tabIndex': isDisabled ? -1 : 0
    };
    // Adding target to a tag created by RN-Web
    if (isExternal && _ref.current) {
      _ref.current.target = '_blank';
      _ref.current.rel = 'noopener';
    }
  } else {
    platformLinkProps = {
      onPress: () => {
        if (!isDisabled) addOnPressFunctionality(href, onPress);
      },
      href
    };
  }
  return {
    linkProps: {
      ...platformLinkProps,
      role: 'link',
      accessible: true
    }
  };
}
//# sourceMappingURL=useLink.js.map