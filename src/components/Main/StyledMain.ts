import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const ContainerAutoComplete = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Text = styled(Typography)`
  color: #00888F;
  @media (max-width: 414px) {
    font-size: 26px;
  }
  font-size: 50px;
  font-weight: bold;
  font-family: 'Globotipo Rounded', sans-serif;
`;

export const Btn = styled(Button)`
  background-color: #D9D9D9;
  color: #00888F;
  font-weight: bold;
  font-family: 'Globotipo Rounded', sans-serif;
  margin-top: 20px;
  width: 100%;
`;
