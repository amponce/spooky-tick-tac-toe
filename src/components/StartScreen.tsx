import React, { FC } from "react";
import { StyledButton } from "./StyledButton";

type StartScreenProps = {
  onStart(): void;
};

export const StartScreen: FC<StartScreenProps> = ({ onStart }) => {
  return <StyledButton onClick={onStart}>Start</StyledButton>;
};
