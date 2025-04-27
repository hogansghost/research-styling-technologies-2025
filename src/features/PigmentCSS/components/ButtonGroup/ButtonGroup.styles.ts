import { styled } from '@pigment-css/react';
import { ButtonGroupProps } from './ButtonGroup.model';

export const StyledButtonGroup = styled('div')<ButtonGroupProps>({
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
