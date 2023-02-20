import Text from './ButtonText';
import Link from './ButtonLink';
import InlineLink from './ButtonInlineLink';
import Icon from './ButtonIcon';
import type { ButtonTextVariant } from './ButtonText/types';
import type { ButtonLinkVariant } from './ButtonLink/types';
import type { ButtonInlineLinkVariant } from './ButtonInlineLink/types';
import type { ButtonIconVariant } from './ButtonIcon/types';

export { Text, Link, Icon, InlineLink };

const Button = {
  Text,
  Link,
  Icon,
  InlineLink,
};

export type {
  ButtonTextVariant,
  ButtonLinkVariant,
  ButtonIconVariant,
  ButtonInlineLinkVariant,
};

export default Button;
