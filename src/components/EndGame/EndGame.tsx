import React from "react";
import messages from "./messagesEndGame";
import Countdown from "./Countdown";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import FileCopyRoundedIcon from "@mui/icons-material/FileCopyRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import * as S from "./StyledEndGame";

interface EndGameProps {
  activeStep: number;
  autohrContent: string;
  finalImage: string;
  statusGame: string;
  resultContent: string;
  year?: string;
}

const EndGame = ({
  activeStep,
  autohrContent,
  finalImage,
  resultContent,
  statusGame,
  year,
}: EndGameProps): JSX.Element => {
  const iconsShare = () => {
    let icons = "";
    let iconsRest = "";
    let iconsWrong = "";

    for (let i = 1; i < activeStep; i++) {
      iconsWrong = iconsWrong + `❌`;
    }

    for (let i = 1; i <= 5 - activeStep; i++) {
      iconsRest = iconsRest + `⚪ `;
    }

    if (statusGame === "game-over" && activeStep === 5) {
      icons = `❌ ❌ ❌ ❌ ❌`;
    } else if (statusGame === "game-over" && activeStep !== 5) {
      icons = iconsWrong + iconsRest;
    } else if (statusGame === "matched") {
      icons = iconsWrong + `✅` + iconsRest;
    }
    return icons;
  };

  const shareContent = `Qual é a novela? 📺 ${iconsShare()}`;
  const url = "https://novel-app-web.vercel.app";

  const copyText = () => {
    navigator.clipboard.writeText(`${shareContent} ${url}`);
  };
  console.log("resultContent", resultContent);
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
      <S.Result>
        Novela de {autohrContent} ({year})
      </S.Result>
      {statusGame === "matched" && (
        <>
          <S.PrincipalText statusGame="matched">
            {messages.matched.principalText}
          </S.PrincipalText>
          <S.TextShot>{`você acertou na ${activeStep} tentativa!`}</S.TextShot>
        </>
      )}
      {statusGame === "game-over" && (
        <>
          <S.PrincipalText statusGame="game-over">
            {messages.error.principalText}
          </S.PrincipalText>
          <S.SubText>{messages.error.subText}</S.SubText>
        </>
      )}
      <S.Result>Compartilhe o seu desafio:</S.Result>
      <S.ContainerIcons>
        <S.ItemIcons>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${shareContent} `}
            target="_blank"
          >
            <FacebookIcon className="icon-celebration rounded-icon" />
          </a>
        </S.ItemIcons>
        <S.ItemIcons>
          <S.Button onClick={copyText}>
            <FileCopyRoundedIcon className="icon-celebration rounded-icon" />
          </S.Button>
        </S.ItemIcons>
        <S.ItemIcons>
          <a
            href={`whatsapp://send?text=${shareContent} ${url} #NovelApp`}
            target="_blank"
          >
            <WhatsAppIcon className="icon-celebration rounded-icon" />
          </a>
        </S.ItemIcons>
        <S.ItemIcons>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareContent}
&url=${url}&hashtags=NovelApp`}
            target="_blank"
          >
            <TwitterIcon className="icon-celebration rounded-icon" />
          </a>
        </S.ItemIcons>
      </S.ContainerIcons>
      <Countdown />
      <S.Text statusGame={statusGame}>
        {messages.bottom[0]}
        <br /> {messages.bottom[1]}{" "}
        <a href="http://www.globoplay.com" target="_blank">
          {messages.bottom[2]}
        </a>
      </S.Text>
    </S.Container>
  );
};

export default EndGame;
