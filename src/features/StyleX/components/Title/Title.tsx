import { Ref, forwardRef } from 'react';
import * as stylex from '@stylexjs/stylex';
import { TitleProps } from './Title.model';
import { styles } from './Title.styles';

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, level = 'h1', ...props }, ref?: Ref<HTMLHeadingElement>) => {
    const HeadingLevel = `${level}`;

    return (
      // @ts-expect-error types for ref on a dynamic element probably.
      <HeadingLevel {...stylex.props(styles.heading, styles[size])} ref={ref} {...props}>
        {children}
      </HeadingLevel>
    );
  },
);
