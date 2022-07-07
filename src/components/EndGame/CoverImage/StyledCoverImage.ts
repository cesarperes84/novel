import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  width: 99%;
  margin: 0 auto;

  .image-novel {
    object-fit: cover;
    object-position: center;
    background-position: center;
    border: 2px solid #3a3a3a;
  }

  @media (min-width: 360px) {
    height: 200px;
    .image-novel {
      height: 200px;
    }
  }

  @media (min-width: 375px) {
    height: 240px;
    .image-novel {
      height: 240px;
    }
  }
  @media (min-width: 800px) {
    height: 340px;
    .image-novel {
      height: 340px;
    }
  }
`;

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

export const Title = styled(Box)`
  color: white;
  font-family: "Globotipo Rd", sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;
