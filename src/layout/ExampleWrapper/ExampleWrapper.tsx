import { ExampleSection } from './features/ExampleSection/ExampleSection';

const ExampleBase = ({ children }: { children: React.ReactNode }) => (
  <main
    style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr)',
      gridAutoRows: 'min-content',
      padding: '32px',
      gap: '64px',
      width: '1400px',
      maxWidth: '100%',
      margin: 'auto',
    }}
  >
    {children}
  </main>
);

export const ExampleWrapper = Object.assign(ExampleBase, {
  Section: ExampleSection,
});
