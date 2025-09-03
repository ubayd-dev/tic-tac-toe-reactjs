import React from "react";
import { PlayerWrapper } from "./Player.styled";
import Avatar from "react-nice-avatar";
import { AvatarWrapper } from "./Player.styled";
import { Subtitle } from "../../styles/General.styled";

function Player({ player, isPlayerActive }) {
  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
}

export default Player;
