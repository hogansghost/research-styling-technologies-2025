import { css } from '@pigment-css/react';

export const cardContent = css(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gridAutoRows: 'min-content',
  gap: theme.spacing.unit * 4,
}));

export const section = css(({ theme }) => ({
  padding: theme.spacing.unit * 3,
  borderRadius: '16px',
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  backgroundColor: 'var(--style-research-cssm-content-background-secondary)',
}));

export const placeholderWrappingGrid = css(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing.unit * 4,
  gridAutoRows: 'min-content',
  gridTemplateColumns: 'minmax(0, 1fr)',

  '@media screen and (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
  },
}));

export const placeholderCardGrid = css(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gridAutoRows: 'min-content',
  gap: theme.spacing.unit * 2,
}));
