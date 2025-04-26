import { styled } from '@pigment-css/react';

export const StyledButton = styled('button')({
  // @ts-expect-error pigmentCSS types
  display: 'block',
  border: 0,
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  color: 'var(--style-research-cssm-button-primary-color-default)',
  backgroundColor: 'var(--style-research-cssm-button-primary-background-default)',
  borderRadius: '8px',
  transition: 'background-color 220ms',

  ':[disabled]': {
    backgroundColor: 'rgb(156 163 175 / 0.9)',
  },

  ':not([disabled])': {
    cursor: 'pointer',
  },

  // This doesn't work lol
  ':not([disabled]):hover': {
    backgroundColor: 'var(--style-research-cssm-button-primary-background-hover)',
  },

  variants: [
    {
      props: { disabled: true },
      style: {
        backgroundColor: 'rgb(156 163 175 / 0.9)',
      },
    },
    {
      props: { size: 'small' },
      style: {
        padding: '8px 4px',
      },
    },
    {
      props: { size: 'medium' },
      style: {
        padding: '8px 16px',
      },
    },
    {
      props: { size: 'large' },
      style: {
        padding: '8px 32px',
      },
    },
  ],
});
