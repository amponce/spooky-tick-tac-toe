import React, { FC } from "react";
import styled from "styled-components";
import { Winner } from "./Board";
import { StyledButton } from "./StyledButton";

type ResetScreenProps = {
  winner: Winner;
  onReset(): void;
};

const WinnerHeading = styled.h2`
  color: #333;
  text-align: center;
  margin-top: 0px;
  font-size: 2rem;
  font-family: "Varela Round";
`;

export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
  return (
    <>
      <WinnerHeading>
        {winner === "tie" ? "It's a tie!" : `${winner} is the winner!`}
      </WinnerHeading>
      <StyledButton onClick={onReset}>Restart</StyledButton>
    </>
  );
};
