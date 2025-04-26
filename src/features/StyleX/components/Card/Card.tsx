import * as stylex from '@stylexjs/stylex';
import { CardProps } from './Card.model';
import { styles } from './Card.styles';

const CardBase = ({ children, ...props }: CardProps) => (
  <article {...stylex.props(styles.card)} {...props}>
    {children}
  </article>
);

const CardBaseHeader = ({ children }: { children: React.ReactNode }) => (
  <header {...stylex.props(styles.cardHeader)}>{children}</header>
);

const CardBaseBody = ({ children }: { children: React.ReactNode }) => (
  <div {...stylex.props(styles.cardBody)}>{children}</div>
);

export const Card = Object.assign(CardBase, {
  Header: CardBaseHeader,
  Body: CardBaseBody,
});
