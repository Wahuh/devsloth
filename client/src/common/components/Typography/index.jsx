import {createElement} from 'react';
import classNames from 'classnames';
import styles from './Typography.module.scss';

const colors = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  accent: styles.accent,
  complement: styles.complement,
  error: styles.error,
};

const fontScale = {
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  24: '1.5rem',
  28: '1.75rem',
  32: '2rem',
  36: '2.25rem',
  48: '3rem',
};

const spacingScale = {
  2: '0.125rem',
  4: '0.25rem',
  8: '0.5rem',
  12: '0.75rem',
  16: '1rem',
  24: '1.5rem',
  32: '2rem',
  40: '2.5rem',
  48: '3rem',
};

const Typography = ({
  as,
  children,
  fontSize,
  color,
  textAlign,
  mb,
  fontWeight,
  letterSpacing,
}) => {
  return createElement(
    as || 'p',
    {
      style: {
        fontWeight: fontWeight || 400,
        letterSpacing: letterSpacing || 'normal',
        fontSize: fontScale[fontSize] || fontScale[16],
        textAlign: textAlign || 'center',
        marginBottom: spacingScale[mb],
      },
      className: classNames(styles.Typography, colors[color]),
    },
    children,
  );
};

export default Typography;
