import React from 'react';
import messages from './messagesEndGame';
import StarIcon from '@mui/icons-material/Star';
import * as S from './StyledEndGame';

interface EndGameProps {
  activeStep: number,
  statusGame: string,
}

const EndGame = ({ activeStep, statusGame }: EndGameProps): JSX.Element => {
    return (
      <S.Container>
        {statusGame === 'matched' && 
          <S.PrincipalText statusGame="matched">{messages.matched.principalText}</S.PrincipalText>
        }
        {statusGame === 'game-over' && 
          <>
            <S.PrincipalText statusGame="game-over">{messages.error.principalText}</S.PrincipalText>
            <S.SubText>
              {messages.error.subText}
            </S.SubText>
          </>
        }
        <S.ContainerStars>
          <StarIcon className="icon-celebration" />
          <StarIcon className="icon-celebration" />
          <StarIcon className="icon-celebration" />
        </S.ContainerStars>
        {statusGame === 'matched' && (<S.TextShot>{`Você acertou na ${activeStep} tentativa!`}</S.TextShot>)}
        <S.Info>{messages.info}</S.Info>
        <S.Text>{messages.bottom[0]}<br /> {messages.bottom[1]} <a href="http://www.globoplay.com" target="_blank">{messages.bottom[2]}</a></S.Text>
      </S.Container>
    );
};

export default EndGame;
