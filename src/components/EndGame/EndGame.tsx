import React from 'react';
import messages from './messagesEndGame';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as S from './StyledEndGame';

interface EndGameProps {
  activeStep: number,
  finalImage: string,
  statusGame: string,
  resultContent: string,
  year?: string,
}

const EndGame = ({ activeStep, finalImage, resultContent, statusGame, year }: EndGameProps): JSX.Element => {

  const iconsShare = () => {
    let icons = '';
    let iconsRest = '';
    let iconsWrong = '';

    for (let i = 1; i < activeStep; i++) {
      iconsWrong = iconsWrong + `🟥 `;
    }
    
    for (let i = 1; i <= 5 - activeStep; i++) {
      iconsRest = iconsRest + `⬛ `;
    }

    if (statusGame === 'game-over' && activeStep === 5 ) {
      icons = `🟥 🟥 🟥 🟥 🟥 `;
    } else if (statusGame === 'game-over' && activeStep !== 5 ) {
      icons = iconsWrong + iconsRest;
    } else if (statusGame === 'matched') {
      icons = iconsWrong + `🟩 ` + iconsRest;
    }
    return icons;
  };
   

  const shareContent = `Qual é a novela? #NovelApp 🎥 ${iconsShare()}`;
  const url = "https://novel-app-web.vercel.app";

  return (
    <S.Container>
      <S.Title>A novela é</S.Title>
      <img
        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${finalImage}`}
        width="100%"
        style={{
          border: "2px solid #3A3A3A",
          margin: "0 10px",
          borderRadius: "8px",
        }}
      />
      <S.Result>A Novela de {resultContent} ({year})</S.Result>
      {statusGame === 'matched' && (
        <>
          <S.PrincipalText statusGame="matched">{messages.matched.principalText}</S.PrincipalText>
          <S.TextShot>{`você acertou na ${activeStep} tentativa!`}</S.TextShot>
        </>
      )}
      {statusGame === 'game-over' && 
        <>
          <S.PrincipalText statusGame="game-over">{messages.error.principalText}</S.PrincipalText>
          <S.SubText>
            {messages.error.subText}
          </S.SubText>
        </>
      }
      <S.Result>Compartilhe o seu desafio:</S.Result>
      <S.ContainerStars>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${shareContent} `} target="_blank"><FacebookRoundedIcon className="icon-celebration" /></a>
        <a href={`whatsapp://send?text=${shareContent} ${url}`} target="_blank"><InstagramIcon className="icon-celebration rounded-icon" /></a>
        <a href={`whatsapp://send?text=${shareContent} ${url}`}target="_blank"><WhatsAppIcon className="icon-celebration rounded-icon" /></a>
        <a href={`https://twitter.com/intent/tweet?text=${shareContent}
&url=${url}`} target="_blank"><TwitterIcon className="icon-celebration rounded-icon" /></a>
      </S.ContainerStars>
      <S.Info>{messages.info}</S.Info>
      <S.Text statusGame={statusGame}>{messages.bottom[0]}<br /> {messages.bottom[1]} <a href="http://www.globoplay.com" target="_blank">{messages.bottom[2]}</a></S.Text>
    </S.Container>
  );
};

export default EndGame;
