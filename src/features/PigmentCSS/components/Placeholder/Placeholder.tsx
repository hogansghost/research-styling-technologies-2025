import { PlaceholderProps } from './Placeholder.model';
import { StyledPlaceholder } from './Placeholder.styles';

export const Placeholder = ({ variant = 'primary' }: PlaceholderProps) => (
  // @ts-expect-error pigmentCSS types
  <StyledPlaceholder variant={variant}>I am a Placeholder</StyledPlaceholder>
);
