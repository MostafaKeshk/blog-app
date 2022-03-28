import { createTheme, ThemeProvider } from '@mui/material/styles';

import colors from './colors';

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    warning: {
      main: colors.danger,
    },
    error: {
      main: colors.danger,
    },
    success: {
      main: colors.green,
    },
    background: {
      default: colors.bgColor,
    },
  },
});

//  them component
const ThemeApp: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeApp;
