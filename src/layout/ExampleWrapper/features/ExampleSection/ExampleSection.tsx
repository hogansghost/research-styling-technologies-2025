export const ExampleSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr)',
      gridAutoRows: 'min-content',
      gap: '16px',
    }}
  >
    <h1 style={{ fontWeight: 700, fontSize: '1.8rem' }}>{title}</h1>

    <div>{children}</div>
  </div>
);
