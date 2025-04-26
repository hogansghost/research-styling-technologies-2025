import { css } from '@pigment-css/react';

export const buttonGroup = css({
  // @ts-expect-error pigmentCSS types
  display: 'flex',
  alignItems: 'stretch',
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  gap: 'var(--spacing-medium)',

  variants: [
    {
      props: { alignment: 'start' },
      style: {
        justifyContent: 'flex-start',
      },
    },
    {
      props: { alignment: 'center' },
      style: {
        justifyContent: 'center',
      },
    },
    {
      props: { alignment: 'end' },
      style: {
        justifyContent: 'flex-end',
      },
    },
  ],
});
