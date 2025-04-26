import { CardProps } from './Card.model';
import { StyledCard, StyledCardBody, StyledCardHeader } from './Card.styles';

const CardBase = ({ children, ...props }: CardProps) => <StyledCard {...props}>{children}</StyledCard>;

const CardBaseHeader = ({ children }: { children: React.ReactNode }) => <StyledCardHeader>{children}</StyledCardHeader>;

const CardBaseBody = ({ children }: { children: React.ReactNode }) => <StyledCardBody>{children}</StyledCardBody>;

export const Card = Object.assign(CardBase, {
  Header: CardBaseHeader,
  Body: CardBaseBody,
});
