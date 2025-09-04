import React, { useContext } from "react";
import { Subtitle, Title } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContexts";
import { ModalContext } from "../../../contexts/ModalContext";
import { SfxContexts } from "../../../contexts/SfxContexts";
import { useNavigate } from "react-router-dom";

function RoundOverModal() {
  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { hoverSfx, clickedSfx } = useContext(SfxContexts);

  const navigate = useNavigate();
  return (
    <>
      <ModalHeader>
        <Title primary>
          {game.roundWinner
            ? `${game.roundWinner.name} Wins Round!🎉`
            : "Round drawn"}
        </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched</Subtitle>
        <Subtitle primary>
          {game.player1.name}:  {game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}:  {game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#2554C7"
          onClick={() => {
            clickedSfx();
            handleModal();
            resetBoard();
          }}
          onMouseEnter={() => hoverSfx()}
        >
          {" "}
          Continue
        </Button>
        <Button
          color="#A020F0"
          onClick={() => {
            clickedSfx();

            restartGame();
            handleModal();
            navigate("/");
          }}
          onMouseEnter={() => hoverSfx()}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
