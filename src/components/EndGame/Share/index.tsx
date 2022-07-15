import React from "react";
import * as S from "./StyledShare";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import FacebookIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface ShareProps {
  shareContent: string;
  url: string;
}
const BASE_URL_FACEBOOK = "https://www.facebook.com/sharer/sharer.php?u=";
const BASE_URL_WHATSAPP = "whatsapp://send?text=";
const BASE_URL_TWITTER = "https://twitter.com/intent/tweet?text=";

export const Share = ({ shareContent, url }: ShareProps) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(`${shareContent} ${url}`);
    setIsCopied(true);
  };

  return (
    <S.Container>
      <S.Paragraph>Compartilhe o seu desafio:</S.Paragraph>
      <S.ContainerIcons>
        <S.ItemIcons>
          <a
            href={`${BASE_URL_FACEBOOK}${url}&t=${shareContent} `}
            target="_blank"
          >
            <FacebookIcon className="rounded-icon" />
          </a>
        </S.ItemIcons>

        <S.ItemIcons>
          <a
            href={`${BASE_URL_WHATSAPP}${shareContent} ${url} #NovelApp`}
            target="_blank"
          >
            <WhatsAppIcon className="rounded-icon" />
          </a>
        </S.ItemIcons>
        <S.ItemIcons>
          <a
            href={`${BASE_URL_TWITTER}${shareContent}&url=${url}&hashtags=NovelApp`}
            target="_blank"
          >
            <TwitterIcon className="rounded-icon" />
          </a>
        </S.ItemIcons>
      </S.ContainerIcons>

      <S.Paragraph>
        Para compartilhar em outras redes,
        <S.ShareLink onClick={handleCopyText}>
          {isCopied ? 'copiado' : 'copie aqui'}.
        </S.ShareLink>
      </S.Paragraph>
    </S.Container>
  );
};

export default Share;
