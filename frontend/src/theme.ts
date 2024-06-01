import { createTheme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      tertiary: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      tertiary?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d103a',
    },
    secondary: {
      main: '#ed1c24',
    },
    custom: {
      tertiary: '#ffffff',
    },
  },
} as ThemeOptions);

export default theme;
