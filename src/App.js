import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './Home.js';
import Picker from './Picker.js';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/picker" element={<Picker />} />
    </Routes>
  </BrowserRouter>
};
