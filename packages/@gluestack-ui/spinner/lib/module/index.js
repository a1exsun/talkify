export function createSpinner(_ref) {
  let {
    Root
  } = _ref;
  Root.displayName = 'Spinner';
  Root.defaultProps = {
    // @ts-ignore
    'tabIndex': 0,
    'aria-label': 'loading'
  };
  return Root;
}
//# sourceMappingURL=index.js.map