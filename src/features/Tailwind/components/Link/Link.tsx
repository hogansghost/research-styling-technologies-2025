import { LinkProps } from './Link.model';

export const Link = ({ children, ...props }: LinkProps) => (
  <a
    className="inline-block text-green-500 border-b border-current border-dashed hover:text-green-700 transition"
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    {children}
  </a>
);
