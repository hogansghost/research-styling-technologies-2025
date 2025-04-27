import { styled } from '@pigment-css/react';
import { PlaceholderProps } from './Placeholder.model';

export const StyledPlaceholder = styled('div')<PlaceholderProps>({
  padding: '16px',
  borderRadius: '16px',
  border: '2px dashed rgba(0, 0, 0, 0.1)',
  minHeight: '120px',
  textAlign: 'center',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gridAutoRows: 'min-content',
  alignContent: 'center',
  variants: [
    {
      props: { variant: 'primary' },
      style: {
        // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
        backgroundColor: 'var(--style-research-cssm-content-background-secondary)',
      },
    },
    {
      props: { variant: 'secondary' },
      style: {
        // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
        color: 'var(--style-research-cssm-content-color-branding-secondary)',
        // Currently creating variables is missing documentation for non NextJS projects, so we will reuse other existing variables.
        backgroundColor: 'var(--style-research-cssm-content-background-branding-secondary)',
        borderColor: 'rgba(255, 255, 255, 0.4)',
      },
    },
  ],
});
