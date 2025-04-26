import { css } from '@pigment-css/react';

export const cardContent = css({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gridAutoRows: 'min-content',
  gap: '32px',
});

export const section = css({
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  padding: 'var(--spacing-medium)',
  borderRadius: '16px',
  // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
  backgroundColor: 'var(--style-research-cssm-content-background-secondary)',
});

export const placeholderWrappingGrid = css({
  display: 'grid',
  gap: '32px',
  gridAutoRows: 'min-content',
  gridTemplateColumns: 'minmax(0, 1fr)',

  '@media screen and (min-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
  },
});

export const placeholderCardGrid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gridAutoRows: 'min-content',
  gap: '16px',
});
