import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TopLabel = styled(Box)`
  margin: 0;
  background: rgba(62, 62, 62, 0.5);
  position: absolute;
  width: 100%;
  padding: 1rem;
`;

export const BottomLabel = styled(TopLabel)`
  bottom: 0;
`;

export const Container = styled(Box)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 340px;
`;

export const Title = styled(Box)`
  color: white;
  font-family: "Globotipo Rd", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;
