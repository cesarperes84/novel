import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container= styled(Box)`
  color: #00888F;
  display: flex;
  font-size: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  width: 800px;
`;

export const ContainerStars = styled(Box)`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  .icon-celebration {
    color: #00888F;
    font-size: 30px;
  }
  .icon-celebration:nth-of-type(2) {
    @media (max-width: 414px) {
      margin: 0 20px;
    }
    margin: 0 60px;
  }
  
`;

export const Info = styled(Box)`
  color: #4E4E4E;
  display: block;
  font-weight: bold;
  @media (max-width: 414px) {
    font-size: 14px;
  }
  font-size: 18px;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
  width: 100%;
  margin: 40px auto;
`;


export const TextShot = styled(Box)`
  display: block;
  @media (max-width: 414px) {
    font-size: 14px;
  }
  font-size: 18px;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
  width: 100%;
`;


export const Text = styled(Box)`
  display: block;
  font-weight: bold;
  @media (max-width: 414px) {
    font-size: 32px;
    line-height: 32px;
  }
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
  width: 100%;
  a {
    text-decoration: underline;
  };
`;

export const PrincipalText = styled(Box)<{statusGame: string}>`
  color: ${({ statusGame }) => (statusGame === 'matched' ? '#00888F' : '#C00532')};
  display: block;
  @media (max-width: 414px) {
    font-size:  ${({ statusGame }) => (statusGame === 'matched' ? '38px' : '26px')};;
  }
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
`;

export const SubText = styled(Box)`
  color: #C00532;
  display: block;
  @media (max-width: 414px) {
    font-size: 14px;
  }
  font-size: 18px;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
  width: 100%;
`;



