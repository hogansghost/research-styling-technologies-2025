import { LinkProps } from './Link.model';
import { link } from './Link.styles';

export const Link = ({ children, ...props }: LinkProps) => (
  <a className={link} target="_blank" rel="noreferrer" {...props}>
    {children}
  </a>
);
