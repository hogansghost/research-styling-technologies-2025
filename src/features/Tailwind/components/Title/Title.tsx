import { Ref, forwardRef } from 'react';
import { TitleProps } from './Title.model';

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, level = 'h1', ...props }, ref?: Ref<HTMLHeadingElement>) => {
    const HeadingLevel = `${level}`;

    return (
      // @ts-expect-error types for ref on a dynamic element probably.
      <HeadingLevel
        className={`
          m-0
          font-semibold
          leading-tight
          
          ${size === 'xs' ? 'text-xl' : ''}
          ${size === 'sm' ? 'text-2xl' : ''}
          ${size === 'md' ? 'text-3xl' : ''}
          ${size === 'lg' ? 'text-4xl' : ''}
        `}
        ref={ref}
        {...props}
      >
        {children}
      </HeadingLevel>
    );
  },
);
