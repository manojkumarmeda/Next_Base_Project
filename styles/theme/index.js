import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: '#5B5B98',
      secondary: '#5B5B98',
      disabled: '#5B5B98',
      hint: '#5B5B98',
      white: '#ffffff',
    },
    primary: {
      main: '#757FEF',
    },
    secondary: {
      main: '#818093',
    },
    success: {
      main: '#00B69B',
      light: '#e0e0e0',
    },
    info: {
      main: '#2DB6F5',
    },
    warning: {
      main: '#FFBC2B',
    },
    danger: {
      main: '#f83245',
      light: '#f8324526',
    },
    dark: {
      main: '#260944',
    },
  },

  typography: {
    fontSize: 12,
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '16px',
          fontSize: '14px',
        },
        head: {
          backgroundColor: '#1A5276',
          fontWeight: 'bold',
          color: '#fff',
        },
        body: {
          color: '#333',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&:hover': {
            color: '#fff',
          },
          '&$active': {
            color: '#fff',
          },
          '&.Mui-active': {
            color: '#fff',
          },
          '.MuiTableSortLabel-icon': {
            color: '#fff !important',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'input[type=number]': {
          '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          MozAppearance: 'textfield',
        },
      },
    },
  },
});

export default theme;
