import { styled } from '@pigment-css/react';
import { ButtonProps } from './Button.model';

export const StyledButton = styled('button')<ButtonProps>({
  display: 'block',
  border: 0,
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  color: 'var(--style-research-cssm-button-primary-color-default, white)',
  backgroundColor: 'var(--style-research-cssm-button-primary-background-default, red)',
  borderRadius: '8px',
  transition: 'background-color 220ms',
  padding: '8px',

  '&:[disabled]': {
    backgroundColor: 'rgb(156 163 175 / 0.9)',
  },

  '&:not([disabled])': {
    cursor: 'pointer',
  },

  '&:not([disabled]):hover': {
    backgroundColor: 'var(--style-research-cssm-button-primary-background-hover, crimson)',
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
