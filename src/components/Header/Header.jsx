import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContexts";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";
import { SfxContexts } from "../../contexts/SfxContexts";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSfx, clickedSfx } = useContext(SfxContexts);
  return (
    <HeaderWrapper>
      <Logo
        className="logo"
        onClick={() => {
          clickedSfx();
          navigate("/");
        }}
        onMouseEnter={() => hoverSfx()}
      />
      <span
        onClick={() => {
          clickedSfx();
          toggleTheme();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
