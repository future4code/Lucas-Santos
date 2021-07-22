import { ThemeProvider } from '@material-ui/core/styles';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './assets/styles/global'
import { Theme } from './assets/styles/theme';
import { Header } from './components/header';
import { Routes } from './routes/routes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}