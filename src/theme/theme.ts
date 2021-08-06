import { createTheme } from '@material-ui/core/styles';

enum Color {
  Red = 'red',
  Green = 'green',
  DarkBlue = '#1775b9',
  LightBlue = '#a2ceed',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Color.DarkBlue,
    },
    secondary: {
      main: Color.LightBlue,
    },
  },
});

export default theme;
