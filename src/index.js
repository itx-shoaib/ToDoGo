import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  customeScondary: "#979797",
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      main: "#979797",
      secondary: "#979797",
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Lato", "Roboto", "-apple-system"].join(","),
      color: "#343A40",
      fontWeight: {
        primary: {
          main: 400,
        },
        secondary: {
          main: 600,
        },
      },
    },
    h1: {
      fontSize: 40,
    },
    h2: {
      fontSize: 30,
    },
    body1: {
      fontFamily: "Lato",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
