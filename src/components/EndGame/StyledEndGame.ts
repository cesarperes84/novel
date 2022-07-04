import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Container= styled(Box)`
  color: #00888F;
  display: flex;
  font-size: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  width: 100%;
`;

export const ContainerErrors = styled(Box)`
  display: flex;
  text-align: left;
`;

export const ContainerIcons = styled(Box)`
  display: flex;
  margin: 0 auto;
  text-align: center;
  width: 100%;
  
  .icon-celebration {
    color: #00638C;
    font-size: 30px;
    @media (max-width: 414px) {
      margin: 0 20px;
    }
    margin: 0 60px;
  }

  .rounded-icon {
    background-color: #00638C;
    border-radius: 50%;
    color: #F5F5F5 !important;
    padding: 5px;
    font-size: 30px;
  }
`;

export const ItemIcons = styled(Box)`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

export const Button = styled(Box)`
  display: flex;
  cursor: pointer;
  margin: 15px auto 0 auto;
  text-align: center;
  .icon-celebration {
    color: #00638C;
    font-size: 30px;
  }
  .icon-celebration:nth-of-type(1) {
    @media (max-width: 414px) {
      margin: 0 20px;
    }
    margin: 0 60px;
  }
  .rounded-icon {
    background-color: #00638C;
    border-radius: 50%;
    color: #F5F5F5 !important;
    padding: 5px;
    font-size: 30px;
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

export const Title = styled(Box)`
  color: #4E4E4E;
  display: block;
  font-family: 'Globotipo Rd', sans-serif;
  font-weight: bold;
  @media (max-width: 414px) {
    font-size: 32px;
  }
  font-size: 58px;
  margin-top: -30px;
`;

export const Result = styled(Box)`
  color: #4E4E4E;
  display: flex;
  font-family: 'Globotipo Rd', sans-serif;
  @media (max-width: 414px) {
    font-size: 14px;
  }
  font-size: 18px;
  justify-content: center;
  margin: 10px 0 20px 0;
  width: 100%;
`;

export const TextShot = styled(Box)`
  display: block;
  @media (max-width: 414px) {
    font-size: 32px;
    line-height: 32px;
  }
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  font-family: 'Globotipo Rd', sans-serif;
  width: 100%;
`;


export const Text = styled(Box)<{statusGame: string}>`
  color: ${({ statusGame }) => (statusGame === 'matched' ? '#00888F' : '#4E4E4E')};
  display: block;
  font-weight: bold;
  @media (max-width: 414px) {
    font-size: 26px;
    margin: -15px 0 40px 0;
  }
  font-size: 38px;
  font-family: 'Globotipo Rd', sans-serif;
  line-height: 36px;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const PrincipalText = styled(Box)<{statusGame: string}>`
  color: ${({ statusGame }) => (statusGame === 'matched' ? '#00888F' : '#C00532')};
  display: block;
  @media (max-width: 414px) {
    font-size:  ${({ statusGame }) => (statusGame === 'matched' ? '38px' : '26px')};;
  }
  margin-top: -20px;
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



