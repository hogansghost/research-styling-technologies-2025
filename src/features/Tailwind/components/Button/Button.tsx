import { ButtonProps } from './Button.model';

export const Button = ({ children, size = 'medium', isDisabled, ...props }: ButtonProps) => (
  <button
    // See "tailwind-input.css" for where these classes are defined. This is a practise they recommend minimising for things like buttons.
    className={`
      btn-primary 
      
      ${size === 'small' ? 'btn-size-sm' : ''}
      ${size === 'medium' ? 'btn-size-md' : ''}
      ${size === 'large' ? 'btn-size-lg' : ''}
    `}
    type="button"
    disabled={isDisabled}
    {...props}
  >
    {children}
  </button>
);
