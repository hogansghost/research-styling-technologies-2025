import * as stylex from '@stylexjs/stylex';

export const styles = stylex.create({
  anchor: {
    display: 'inline-block',
    color: {
      default: '#04c8b4',
      ':hover': '#025048',
    },
    borderBottom: '1px dashed currentColor',
    transition: 'color 220ms',
  },
});
