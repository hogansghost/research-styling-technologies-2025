import { PlaceholderProps } from './Placeholder.model';

export const Placeholder = ({ variant = 'primary' }: PlaceholderProps) => (
  <div
    className={`
      rounded-lg p-4 border-2 border-dashed text-center
      ${variant === 'primary' ? 'bg-gray-100 border-gray-900 border-opacity-10' : ''}
      ${variant === 'secondary' ? 'text-white bg-blue-900 border-white border-opacity-30' : ''}
    `}
  >
    I am a Placeholder
  </div>
);
