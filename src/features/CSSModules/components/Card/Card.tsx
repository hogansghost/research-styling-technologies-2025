import { CardProps } from './Card.model';
import styles from './Card.module.css';

const CardBase = ({ children, ...props }: CardProps) => (
  <article className={styles.card} {...props}>
    {children}
  </article>
);

const CardBaseHeader = ({ children }: { children: React.ReactNode }) => (
  <header className={styles.cardHeader}>{children}</header>
);

const CardBaseBody = ({ children }: { children: React.ReactNode }) => <div className={styles.cardBody}>{children}</div>;

export const Card = Object.assign(CardBase, {
  Header: CardBaseHeader,
  Body: CardBaseBody,
});
