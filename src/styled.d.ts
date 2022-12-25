// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      main: string;
    };
    colors: {
      primary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      grey: string;
      dark: string;
      color: string;
    };
    sizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
    };
    heading: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    transitionDelay: string;
  }
}
