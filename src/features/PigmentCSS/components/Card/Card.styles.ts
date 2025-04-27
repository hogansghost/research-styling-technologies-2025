import { css } from '@pigment-css/react';

export const card = css({
  borderRadius: '8px',
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  backgroundColor: 'var(--style-research-cssm-content-background-primary)',
  textAlign: 'start',
  boxShadow: '0 3px 8px -2px rgba(0, 0, 0, 0.12), 0 6px 14px -4px rgba(0, 0, 0, 0.1)',
});

export const cardHeader = css(({ theme }) => ({
  padding: theme.spacing.unit * 3,
}));

export const cardBody = css(({ theme }) => ({
  padding: theme.spacing.unit * 3,
}));
