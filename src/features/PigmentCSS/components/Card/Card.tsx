import { CardProps } from './Card.model';
import { card, cardHeader, cardBody } from './Card.styles';

const CardBase = ({ children, ...props }: CardProps) => (
  <article className={card} {...props}>
    {children}
  </article>
);

const CardBaseHeader = ({ children }: { children: React.ReactNode }) => (
  <header className={cardHeader}>{children}</header>
);

const CardBaseBody = ({ children }: { children: React.ReactNode }) => <div className={cardBody}>{children}</div>;

export const Card = Object.assign(CardBase, {
  Header: CardBaseHeader,
  Body: CardBaseBody,
});
