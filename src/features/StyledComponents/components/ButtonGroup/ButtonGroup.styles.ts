import styled, { css } from 'styled-components';
import { ButtonAlignments } from './ButtonGroup.model';

export const StyledButtonGroup = styled.div<{
  $alignment: ButtonAlignments;
}>`
  ${({ $alignment }) => css`
    display: flex;
    align-items: stretch;
    gap: 16px;

    ${$alignment === 'start' &&
    css`
      justify-content: flex-start;
    `}

    ${$alignment === 'center' &&
    css`
      justify-content: center;
    `}

    ${$alignment === 'end' &&
    css`
      justify-content: flex-end;
    `}
  `}
`;
