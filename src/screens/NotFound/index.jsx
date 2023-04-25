import React from "react";

import * as S from "./styles";

const NotFound = () => (
  <S.Wrapper>
    <S.Info>
      <S.Error>404</S.Error>
      <S.Message>PAGE NOT FOUND</S.Message>
      <S.Btn to="/">go back home</S.Btn>
    </S.Info>
  </S.Wrapper>
);

export default NotFound;
