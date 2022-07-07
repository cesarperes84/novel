import React from "react";
import messages from "./messagesEndGame";
import * as S from "./StyledEndGame";

interface AdsProps {
  statusGame?: string;
}

const Ads = ({ statusGame }: AdsProps): JSX.Element => {
  if (!statusGame) {
    return <></>;
  }

  return (
    <S.AdsText>
      {messages.adsMessage}
      <a href="http://www.globoplay.com" target="_blank">
        {messages.adsBrand}
      </a>
    </S.AdsText>
  );
};

export default Ads;
