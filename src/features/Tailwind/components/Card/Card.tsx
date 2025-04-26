import { CardProps } from './Card.model';

const CardBase = ({ children, ...props }: CardProps) => (
  <article className="bg-white shadow-xl rounded-lg" {...props}>
    {children}
  </article>
);

const CardBaseHeader = ({ children }: { children: React.ReactNode }) => <header className="p-4">{children}</header>;

const CardBaseBody = ({ children }: { children: React.ReactNode }) => <div className="p-4">{children}</div>;

export const Card = Object.assign(CardBase, {
  Header: CardBaseHeader,
  Body: CardBaseBody,
});
