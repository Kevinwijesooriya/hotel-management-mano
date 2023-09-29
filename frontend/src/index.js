import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from "@mui/material";
import Theme from './theme/Theme';
import 'react-toastify/dist/ReactToastify.css';
import "typeface-poppins";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
