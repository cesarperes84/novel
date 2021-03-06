import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

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
  background-color:#00888F;
  color:  #FFFFFF;
  font-weight: bold;
  font-family: 'Globotipo Rounded', sans-serif;
  margin-top: 20px;
  width: 100%;
`;
