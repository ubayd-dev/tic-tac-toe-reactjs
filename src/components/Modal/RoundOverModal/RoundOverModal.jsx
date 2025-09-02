import React, { useContext } from "react";
import { Subtitle, Title } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContexts";
import { ModalContext } from "../../../contexts/ModalContext";

function RoundOverModal() {
  const { resetBoard, game } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
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
          {game.player1.name}:{game.player1.score}
        </Subtitle>
        <Subtitle primary>
          {game.player2.name}:{game.player2.score}
        </Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button
          color="#2554C7"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          {" "}
          Continue
        </Button>
        <Button
          color="#A020F0"
          onClick={() => {
            handleModal();
            resetBoard();
          }}
        >
          Restart
        </Button>
      </ModalFooter>
    </>
  );
}

export default RoundOverModal;
