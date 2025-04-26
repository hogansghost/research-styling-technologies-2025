import styled, { css } from 'styled-components';

export const StyledComponentsCardContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: min-content;
  gap: 32px;
`;

export const StyledSection = styled.section`
  ${({ theme }) => css`
    padding: 16px;
    border-radius: 16px;
    background-color: ${theme.content.background.secondary};
  `}
`;

export const StyledPlaceholderGridMediaQueryExample = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-rows: min-content;
  gap: 32px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`;

export const StyledPlaceholderGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: min-content;
  gap: 16px;
`;
