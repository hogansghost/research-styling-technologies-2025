import styled, { css } from 'styled-components';

export const StyledCard = styled.article`
  ${({ theme }) => css`
    border-radius: 16px;
    background-color: ${theme.content.background.primary};
    text-align: start;
    box-shadow:
      0 3px 8px -2px rgba(0, 0, 0, 0.12),
      0 6px 14px -4px rgba(0, 0, 0, 0.1);
  `}
`;

export const StyledCardHeader = styled.div`
  padding: 16px;
`;

export const StyledCardBody = styled.div`
  padding: 16px;
`;
