import { PlaceholderProps } from './Placeholder.model';
import styles from './Placeholder.module.css';

export const Placeholder = ({ variant = 'primary' }: PlaceholderProps) => (
  <div
    className={`${styles.placeholder}
      ${variant === 'primary' ? styles.placeholderPrimary : ''}
      ${variant === 'secondary' ? styles.placeholderSecondary : ''}
    `}
  >
    I am a Placeholder
  </div>
);
