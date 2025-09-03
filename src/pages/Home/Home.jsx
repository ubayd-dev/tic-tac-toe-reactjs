import React, { useContext } from "react";

import { Container, Subtitle, Title } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContexts } from "../../contexts/SfxContexts";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickedSfx } = useContext(SfxContexts);

  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          navigate("/game-on");
          clickedSfx();
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
