import { Ref, forwardRef } from 'react';
import { TitleProps } from './Title.model';
import { StyledTitle } from './Title.styles';

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, size, level = 'h1', ...props }, ref?: Ref<HTMLHeadingElement>) => (
    <StyledTitle $size={size} as={level} ref={ref} {...props}>
      {children}
    </StyledTitle>
  ),
);
