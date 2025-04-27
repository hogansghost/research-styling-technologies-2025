import { css } from '@pigment-css/react';

export const heading = css({
  margin: 0,
  fontWeight: '600',
  lineHeight: '1.2',
});

// There is seemingly no way to dynamically handle props with a dynamic tag. (H1, H2, H3, etc.)
export const sizes = {
  xs: css({
    fontSize: '1.25rem',
  }),

  sm: css({
    fontSize: '1.5rem',
  }),

  md: css({
    fontSize: '1.9rem',
  }),

  lg: css({
    fontSize: '2.125rem',
  }),
};
