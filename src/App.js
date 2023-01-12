import React, {
  useEffect,
  useState,
} from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

import Home from './Home.js';
import Picker from './Picker.js';

export default function App() {
  const [primary, setPrimary] = useState('#1976d2');
  const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      }
    }
  });
  useEffect(() => {
    window.addEventListener('message', function (ev) {
      const { primary } = ev.data;
      if (primary !== undefined) setPrimary(primary);
    });
  });

  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/picker" element={<Picker />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
};
