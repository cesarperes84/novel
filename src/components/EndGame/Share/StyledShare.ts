import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  width: 100%;
`;

export const ContainerIcons = styled(Box)`
  display: flex;
  margin: 0 auto;
  text-align: center;
  width: 240px;

  .rounded-icon {
    background-color: #00638c;
    border-radius: 50%;
    color: #f5f5f5;
    padding: 6px;
    font-size: 38px;
  }
`;

export const ItemIcons = styled(Box)`
  margin: 0 auto;
`;

export const Paragraph = styled(Box)`
  color: #4e4e4e;
  display: flex;
  font-family: "Globotipo Rd", sans-serif;
  font-size: 18px;
  justify-content: center;
  margin: 10px 0;
  width: 100%;
`;

export const ShareLink = styled(Box)`
  cursor: pointer;
  text-decoration: underline;
  padding-left: 5px;
`;
