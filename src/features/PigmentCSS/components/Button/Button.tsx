import { ButtonProps } from './Button.model';
import { StyledButton } from './Button.styles';

export const Button = ({ children, size = 'medium', isDisabled, ...props }: ButtonProps) => (
  // @ts-expect-error pigmentCSS types
  <StyledButton size={size} type="button" disabled={isDisabled} {...props}>
    {children}
  </StyledButton>
);
