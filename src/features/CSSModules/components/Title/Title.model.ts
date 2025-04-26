export type TitleSizes = 'xs' | 'sm' | 'md' | 'lg';

export type TitleLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TitleProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  children: React.ReactNode;
  size: TitleSizes;
  level?: keyof Pick<JSX.IntrinsicElements, TitleLevels>;
};
