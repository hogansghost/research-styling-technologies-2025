import styled, { css } from 'styled-components';
import { PlaceholderVariants } from './Placeholder.model';

export const StyledPlaceholder = styled.div<{ $variant: PlaceholderVariants }>`
  ${({ theme, $variant }) => css`
    padding: 16px;
    border-radius: 16px;
    border: 2px dashed rgba(0, 0, 0, 0.1);
    min-height: 120px;
    text-align: center;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: min-content;
    align-content: center;

    ${$variant === 'primary' &&
    css`
      background-color: ${theme.content.background.secondary};
    `}

    ${$variant === 'secondary' &&
    css`
      color: ${theme.content.branding.secondary.color};
      background-color: ${theme.content.branding.secondary.background};
      border-color: rgba(255, 255, 255, 0.4);
    `}
  `}
`;
