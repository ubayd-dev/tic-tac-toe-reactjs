import React from "react";
import { ThemeContextProvider } from "./ThemeContexts";
import { GameContextProvider } from "./GameContexts";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>{children}</GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
