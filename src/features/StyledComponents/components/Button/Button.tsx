import { ButtonProps } from './Button.model';
import { StyledButton } from './Button.styles';

export const Button = ({ children, size = 'medium', isDisabled, ...props }: ButtonProps) => (
  <StyledButton type="button" $size={size} $isDisabled={isDisabled} disabled={isDisabled} {...props}>
    {children}
  </StyledButton>
);
