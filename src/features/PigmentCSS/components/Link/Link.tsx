import * as stylex from '@stylexjs/stylex';
import { LinkProps } from './Link.model';
import { styles } from './Link.styles';

export const Link = ({ children, ...props }: LinkProps) => (
  <a {...stylex.props(styles.anchor)} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);
