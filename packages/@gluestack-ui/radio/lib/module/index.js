import { Radio as RadioMain } from './Radio';
import { RadioIcon } from './RadioIcon';
import { RadioIndicator } from './RadioIndicator';
import { RadioLabel } from './RadioLabel';
import { RadioGroup } from './RadioGroup';
export const createRadio = ({
  Root,
  Group,
  Icon,
  Indicator,
  Label
}) => {
  const Radio = RadioMain(Root);
  Radio.Group = RadioGroup(Group);
  Radio.Label = RadioLabel(Label);
  Radio.Icon = RadioIcon(Icon);
  Radio.Indicator = RadioIndicator(Indicator);
  Radio.displayName = 'Radio';
  Radio.Group.displayName = 'Radio.Group';
  Radio.Label.displayName = 'Radio.Label';
  Radio.Icon.displayName = 'Radio.Icon';
  Radio.Indicator.displayName = 'Radio.Indicator';
  return Radio;
};
//# sourceMappingURL=index.js.map