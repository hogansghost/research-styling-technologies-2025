import { DetailedHTMLProps, HTMLAttributes } from "react";

export type LinkProps = DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  children: React.ReactNode;
};
