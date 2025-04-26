import { ButtonGroupProps } from './ButtonGroup.model';
import { buttonGroup } from './ButtonGroup.styles';

export const ButtonGroup = ({ children, alignment = 'end' }: ButtonGroupProps) => (
  // @ts-expect-error pigmentCSS types
  // eslint-disable-next-line react/no-unknown-property
  <div className={buttonGroup} alignment={alignment}>
    {children}
  </div>
);
