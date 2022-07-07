import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  color: #00888f;
  display: flex;
  font-size: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const Title = styled(Box)<{ statusGame: string }>`
  color: ${({ statusGame }) =>
    statusGame === "matched" ? "#00888F" : "#C00532"};
  font-size: 26px;
  font-weight: 500;
  text-align: center;
  font-family: "Globotipo Rd", sans-serif;
  white-space: nowrap;
  strong {
    font-weight: 900;
  }
`;
