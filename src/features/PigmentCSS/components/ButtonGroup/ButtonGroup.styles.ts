import { styled } from '@pigment-css/react';
import { ButtonGroupProps } from './ButtonGroup.model';

export const StyledButtonGroup = styled('div')<ButtonGroupProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'stretch',
  gap: theme.spacing.unit * 1,

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
}));
