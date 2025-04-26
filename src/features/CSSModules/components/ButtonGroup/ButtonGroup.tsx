import { ButtonGroupProps } from './ButtonGroup.model';
import styles from './ButtonGroup.module.css';

export const ButtonGroup = ({ children, alignment = 'end' }: ButtonGroupProps) => (
  <div
    className={`
      ${styles.buttonGroup}
      ${alignment === 'start' ? styles.justifyStart : ''}
      ${alignment === 'center' ? styles.justifyCenter : ''}
      ${alignment === 'end' ? styles.justifyEnd : ''}
    `}
  >
    {children}
  </div>
);
