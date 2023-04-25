import React from "react";

import * as S from "./styles";

const About = () => {
  return (
    <S.Wrapper>
      <S.Title>
        Coronavirus disease (COVID-19) is an infectious disease caused by the
        SARS-CoV-2 virus.
      </S.Title>
      <S.InfoText>
        Most people infected with the virus will experience mild to moderate
        respiratory illness and recover without requiring special treatment.
        However, some will become seriously ill and require medical attention.
        Older people and those with underlying medical conditions like
        cardiovascular disease, diabetes, chronic respiratory disease, or cancer
        are more likely to develop serious illness. Anyone can get sick with
        COVID-19 and become seriously ill or die at any age.
      </S.InfoText>
      <S.InfoText>
        For more information attend <S.Link>WHO website</S.Link>.
      </S.InfoText>
    </S.Wrapper>
  );
};

export default About;
