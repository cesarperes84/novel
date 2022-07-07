import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  color: #00888f;
  display: flex;
  font-size: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
`;

export const Title = styled(Box)<{ statusGame: string }>`
  color: ${({ statusGame }) =>
    statusGame === "matched" ? "#00888F" : "#C00532"};
  font-size: 1.5rem;
  line-height: 1.6rem;
  font-weight: 500;
  text-align: center;
  font-family: "Globotipo Rd", sans-serif;
  strong {
    font-weight: 900;
  }
`;
