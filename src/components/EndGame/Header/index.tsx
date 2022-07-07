import React from "react";
import * as S from "./StyledHeader";

export const Header = () => (
  <S.Container component="div">
    <img src="/logo.png" alt="Novel Logo" height={74} />
  </S.Container>
);

export default Header;
