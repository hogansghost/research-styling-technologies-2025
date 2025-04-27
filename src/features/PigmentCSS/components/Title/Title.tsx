import { Ref, forwardRef } from 'react';
import { TitleProps } from './Title.model';
import { heading, sizes } from './Title.styles';

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, level = 'h1', ...props }, ref?: Ref<HTMLHeadingElement>) => {
    const HeadingLevel = `${level}`;

    return (
      // @ts-expect-error types for ref on a dynamic element probably.
      <HeadingLevel className={`${heading} ${sizes[size]}`} ref={ref} {...props}>
        {children}
      </HeadingLevel>
    );
  },
);
