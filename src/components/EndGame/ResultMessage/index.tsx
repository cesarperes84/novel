import React from "react";
import * as S from "./StyledResultMessage";
import messages from "../messagesEndGame";

interface ResultMessageProps {
  activeStep: number;
  statusGame: string;
}

export const ResultMessage = ({
  statusGame,
  activeStep,
}: ResultMessageProps) => {
  const matchedStatus = "matched";
  const gameOverStatus = "game-over";

  return (
    <S.Container>
      {statusGame === matchedStatus && (
        <S.Title statusGame={matchedStatus}>
          <strong>{messages.matched.principalText}</strong>
          {` Você acertou na ${activeStep}º tentativa!`}
        </S.Title>
      )}
      {statusGame === gameOverStatus && (
        <S.Title statusGame={gameOverStatus}>
          <strong>{messages.error.principalText}</strong>
          {messages.error.subText}
        </S.Title>
      )}
    </S.Container>
  );
};

export default ResultMessage;
