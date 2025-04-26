import styled, { css } from 'styled-components';
import { ButtonSizes } from './Button.model';

export const StyledButton = styled.button<{ $size: ButtonSizes; $isDisabled?: boolean }>`
  ${({ theme, $size, $isDisabled }) => css`
    display: block;
    border: 0;
    color: ${theme.buttons.primary.color.default};
    background-color: ${theme.buttons.primary.background.default};
    border-radius: 8px;
    transition: background-color 220ms;

    &:not([disabled]) {
      cursor: pointer;

      &:hover {
        background-color: ${theme.buttons.primary.background.hover};
      }
    }

    ${$isDisabled &&
    css`
      background-color: rgb(156 163 175 / 0.9);
    `}

    ${$size === 'small' &&
    css`
      padding: 8px 4px;
    `}

    ${$size === 'medium' &&
    css`
      padding: 8px 16px;
    `}

    ${$size === 'large' &&
    css`
      padding: 8px 32px;
    `}
  `}
`;
