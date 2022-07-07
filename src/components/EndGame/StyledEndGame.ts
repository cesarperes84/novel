import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  color: #00888f;
  display: flex;
  flex-wrap: wrap;
`;

export const Footer = styled(Box)`
  background: #4e4e4e;
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  p {
    padding: 5px;
    margin: 0;
    font-size: 14px;
    text-align: center;
  }
`;

export const AdsText = styled(Box)<{ statusGame: string }>`
  color: ${({ statusGame }) =>
    statusGame === "matched" ? "#00888F" : "#4E4E4E"};
  display: block;
  font-weight: bold;
  font-size: 26px;
  font-family: "Globotipo Rd", sans-serif;
  line-height: 36px;
  margin: 0;
  text-align: center;
  width: 100%;
`;
