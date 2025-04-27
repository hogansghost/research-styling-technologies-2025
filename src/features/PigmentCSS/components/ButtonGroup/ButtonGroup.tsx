import { ButtonGroupProps } from './ButtonGroup.model';
import { StyledButtonGroup } from './ButtonGroup.styles';

export const ButtonGroup = ({ children, alignment = 'end' }: ButtonGroupProps) => (
  <StyledButtonGroup alignment={alignment}>{children}</StyledButtonGroup>
);
