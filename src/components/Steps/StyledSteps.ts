import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)`
  margin: 19px 0 0 0;
  display: flex;
`;

export const Step = styled(Box)<{ active: boolean, completed: boolean }>`
  background-color:  ${({ active }) => active ? "#3A3A3A" : "#BABABA"};
  background-color:  ${({ completed }) => completed && "#C00532"};
  border-radius: 100%;
  color: #FFF;
  font-family: 'Globotipo Rounded', sans-serif;
  font-size: 18px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
  margin: 10px;
  padding: 2px 8px 2px ;
  width: 32px;
`;
