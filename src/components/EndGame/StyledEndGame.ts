import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  color: #00888f;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`;

export const Footer = styled(Box)`
  background: #4e4e4e;
  color: white;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  padding: 5px;

  @media (min-width: 360px) {
    font-size: 12px;
  }
`;

export const AdsText = styled(Box)`
  color: #4e4e4e;
  display: block;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.6rem;
  margin-top: 20px;
  align-self: flex-end;
  font-family: "Globotipo Rd", sans-serif;
  text-align: center;
  white-space: nowrap;
  width: 100%;
  a { 
    text-decoration: underline;
  }
`;
