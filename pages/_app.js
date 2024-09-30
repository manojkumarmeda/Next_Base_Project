import '@/styles/globals.css';
import theme from '@/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import 'tailwindcss/tailwind.css';
import StoreProvider from './StoreProvider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StoreProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </StoreProvider>
      </ThemeProvider>
    </>
  );
}
