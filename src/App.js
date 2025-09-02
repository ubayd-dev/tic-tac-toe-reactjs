import { useContext } from "react";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContexts";
import { ModalContextProvider } from "./contexts/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={mode}>
      <ModalContextProvider>
        <GlobalStyle />
        <Router />
      </ModalContextProvider>
    </ThemeProvider>
  );
}

export default App;
