import { LinkProps } from './Link.model';
import { StyledLink } from './Link.styles';

export const Link = ({ children, ...props }: LinkProps) => (
  <StyledLink target="_blank" rel="noreferrer" {...props}>
    {children}
  </StyledLink>
);
