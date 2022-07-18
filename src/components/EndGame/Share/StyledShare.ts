import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  width: 100%;
  padding: 20px 0;
`;

export const ContainerIcons = styled(Box)`
  display: flex;
  margin: 10px auto;
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
  font-size: 1rem;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 414px) {
    font-size: 0.9rem;
  }
`;

export const ShareLink = styled(Box)<{isCopied: boolean}>`
  cursor: pointer;
  text-decoration: underline;
  padding-left: 5px;
  a { 
    text-decoration: ${({ isCopied }) => isCopied ? "none" : "underline"};
  }
`;
