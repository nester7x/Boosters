import React from "react";

import * as S from "./styles";

const SideBar = () => {
  const links = [
    {
      component: <S.Link to="/">Global statistic</S.Link>,
      key: "global_statistic"
    },
    {
      component: <S.Link to="live_by_country">Live by country</S.Link>,
      key: "live_by_country"
    },
    {
      component: <S.Link to="about">About</S.Link>,
      key: "about"
    }
  ];

  return (
    <S.Wrapper>
      <S.Menu>
        {links.map((item) => (
          <S.MenuItem key={item.key} data-hover={item.key}>
            {item.component}
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
};

export default SideBar;
