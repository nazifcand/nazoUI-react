import { FC } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  fonts: {
    main: 'Montserrat',
  },
  colors: {
    primary: '60, 77, 219',
    success: '90, 192, 143',
    danger: '250, 99, 34',
    warning: '250, 189, 34',
    info: '95, 150, 233',
    grey: '212, 219, 239',
    dark: '48, 50, 61',
    color: '48, 50, 61',
  },
  sizes: {
    xsmall: '.75rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
  },
  heading: {
    h1: '2rem',
    h2: '1.5rem',
    h3: '1.17rem',
    h4: '1rem',
    h5: '.83rem',
    h6: '.67rem',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '.5rem',
    large: '1rem',
    half: '50%',
    full: '100%',
  },
  transitionDelay: '.35s',
};

const Theme: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
