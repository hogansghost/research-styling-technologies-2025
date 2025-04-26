import styled, { css } from 'styled-components';
import { TitleLevels, TitleSizes } from './Title.model';

export const StyledTitle = styled.h1<{ as: TitleLevels; $size: TitleSizes }>`
  ${({ $size }) => css`
    margin: 0;
    font-weight: 600;
    line-height: 1.2;

    ${$size === 'xs' &&
    css`
      font-size: 1.25rem;
    `}

    ${$size === 'sm' &&
    css`
      font-size: 1.5rem;
    `}

    ${$size === 'md' &&
    css`
      font-size: 1.9rem;
    `}
    
    ${$size === 'lg' &&
    css`
      font-size: 2.125rem;
    `}
  `};
`;
