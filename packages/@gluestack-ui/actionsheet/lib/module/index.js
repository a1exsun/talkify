import { Actionsheet as ActionsheetMain } from './Actionsheet';
import ActionsheetContent from './ActionsheetContent';
import { ActionsheetItem } from './ActionsheetItem';
import ActionsheetBackdrop from './ActionsheetBackdrop';
import { ActionsheetDragIndicatorWrapper } from './ActionsheetDragIndicatorWrapper';
// import { ActionsheetItemText } from './ActionsheetItemText';
import ActionsheetDragIndicator from './ActionsheetDragIndicator';
// import { ActionsheetScrollView } from './ActionsheetScrollView';
// import { ActionsheetVirtualizedList } from './ActionsheetVirtualizedList';

// import { ActionsheetFlatList } from './ActionsheetFlatList';
// import { ActionsheetSectionList } from './ActionsheetSectionList';
// import { ActionsheetSectionHeaderText } from './ActionsheetSectionHeaderText';
// import { ActionsheetIcon } from './ActionsheetIcon';

export function createActionsheet({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  AnimatePresence
}) {
  const Actionsheet = ActionsheetMain(Root);
  Actionsheet.Backdrop = ActionsheetBackdrop(Backdrop, AnimatePresence);
  Actionsheet.Content = ActionsheetContent(Content, AnimatePresence);
  Actionsheet.DragIndicator = ActionsheetDragIndicator(DragIndicator);
  Actionsheet.DragIndicatorWrapper = ActionsheetDragIndicatorWrapper(IndicatorWrapper);
  Actionsheet.Item = ActionsheetItem(Item);
  Actionsheet.ItemText = ItemText;
  Actionsheet.Icon = Icon;
  Actionsheet.ScrollView = ScrollView;
  Actionsheet.VirtualizedList = VirtualizedList;
  Actionsheet.FlatList = FlatList;
  Actionsheet.SectionList = SectionList;
  Actionsheet.SectionHeaderText = SectionHeaderText;
  return Actionsheet;
}
//# sourceMappingURL=index.js.map