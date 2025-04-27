import { css } from '@pigment-css/react';

export const link = css({
  display: 'inline-block',
  color: '#04c8b4',
  borderBottom: '1px dashed currentColor',
  transition: 'color 220ms',

  '&:hover': {
    color: '#025048',
  },
});
