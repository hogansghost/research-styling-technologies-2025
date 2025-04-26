import { ButtonProps } from './Button.model';
import styles from './Button.module.css';

export const Button = ({ children, size = 'medium', isDisabled, ...props }: ButtonProps) => (
  <button className={`${styles.button} ${styles[size]}`} type="button" disabled={isDisabled} {...props}>
    {children}
  </button>
);
