import React from "react";
import { ThemeContextProvider } from "./ThemeContexts";
import { GameContextProvider } from "./GameContexts";
import { SfxContextsProvider } from "./SfxContexts";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SfxContextsProvider>{children}</SfxContextsProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
