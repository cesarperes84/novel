import React from "react";

import * as S from "./StyledCoverImage";

interface ImageNovelProps {
  imageUrl: string;
  author?: string;
  year?: string;
}

export const ImageNovel = ({ imageUrl, author, year }: ImageNovelProps) => {
  return (
    <S.Container>
      <S.TopLabel>
        <S.Title>A novela é: </S.Title>
      </S.TopLabel>
      <img
        className="image-novel"
        src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${imageUrl}`}
        width={"100%"}
      />
      <S.BottomLabel>
        <S.Title>
          Novela de {author} {year && `(${year})`}
        </S.Title>
      </S.BottomLabel>
    </S.Container>
  );
};

export default ImageNovel;
