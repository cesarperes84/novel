import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)`
  margin: 20px auto 0 auto;
  text-align: center;
`;

export const ContainerErrors = styled(Box)`
  margin-bottom: 27px;
  text-align: left;
`;

export const Label = styled(Typography)`
  color: #C00532;
  @media (min-width: 390px) {
    font-size: 14px;
  }
  font-size: 18px;
  font-weight: bold;
  font-family: 'Globotipo Rd', sans-serif;
`;

export const Text = styled(Box)`
  color: #4E4E4E;
  @media (min-width: 390px) {
    font-size: 14px;
  }
  font-size: 18px;
  font-weight: bold;
  font-family: 'Globotipo Rd', sans-serif;
`;

export const SubText = styled(Typography)`
  color: #4E4E4E;
  display: inline-flex;
  @media (min-width: 390px) {
    font-size: 14px;
  }
  font-size: 18px;
  font-weight: normal;
  font-family: 'Globotipo Rd', sans-serif;
`;
