import { LinkProps } from './Link.model';
import styles from './Link.module.css';

export const Link = ({ children, ...props }: LinkProps) => (
  <a className={styles.anchor} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);
