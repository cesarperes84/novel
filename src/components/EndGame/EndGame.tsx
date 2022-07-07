import React from "react";
import ImageNovel from "./CoverImage";

import { ResultMessage } from "./ResultMessage";
import { Share } from "./Share";

import { iconsShareUtil } from "./IconsShareUtil";
import { Footer } from "./Footer";
import Ads from "./Ads";

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
  statusGame,
  year,
}: EndGameProps): JSX.Element => {
  const iconsShare = iconsShareUtil(activeStep, statusGame);

  const shareContent = `Qual é a novela? 📺 ${iconsShare}`;
  const url = "https://novel-app-web.vercel.app";

  return (
    <S.Container>
      <ImageNovel imageUrl={finalImage} author={autohrContent} year={year} />

      <ResultMessage statusGame={statusGame} activeStep={activeStep} />

      <Share shareContent={shareContent} url={url} />

      <Ads statusGame={statusGame} />
      <Footer />
    </S.Container>
  );
};

export default EndGame;
