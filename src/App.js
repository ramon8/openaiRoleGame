/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Home } from "./pages/home";
import { Game } from "./pages/game";
import { AnimatePresence } from 'framer-motion';

import { Terminal } from './pages/terminal';

import {
  Routes,
  Route
} from "react-router-dom";

const styles = {
  display: 'grid',
  width: '100%',
  height: '100%',
  background: '#333032',
  placeItems: 'center'
}

export const Context = React.createContext({});

const App = () => {
  const [transition, setTransition] = useState(true);
  const location = useLocation();
  const contextValue = {
    transition, setTransition
  }

  return <div css={styles}>
    <Context.Provider value={contextValue}>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/game" element={<Game />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Terminal />} />
        </Routes>
      </AnimatePresence>
    </Context.Provider>
  </div >
}

export default App;
