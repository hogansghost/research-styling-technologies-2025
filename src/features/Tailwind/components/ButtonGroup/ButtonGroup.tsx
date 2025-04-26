import { ButtonGroupProps } from './ButtonGroup.model';

export const ButtonGroup = ({ children, alignment = 'end' }: ButtonGroupProps) => (
  <div
    className={`
      flex items-stretch gap-4
  
      ${alignment === 'start' ? 'justify-start' : ''}
      ${alignment === 'center' ? 'justify-center' : ''}
      ${alignment === 'end' ? 'justify-end' : ''}
    `}
  >
    {children}
  </div>
);
