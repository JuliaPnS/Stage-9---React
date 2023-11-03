import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';

import theme from './styles/theme';

<<<<<<< HEAD
import { SignIn } from './pages/SignIn';
=======
import { Home } from './pages/Home';
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
<<<<<<< HEAD
       <SignIn />
=======
       <Home />
>>>>>>> b7c8eafb182716b1a36dc62932a0cd717637f502
    </ThemeProvider>
   
  </React.StrictMode>,
)
