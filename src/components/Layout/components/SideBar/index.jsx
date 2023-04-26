import React from "react";
import { useLocation } from "react-router-dom";

import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

import * as S from "./styles";

const SideBar = () => {
  const location = useLocation();

  const links = [
    {
      component: (
        <S.Link to="">
          <PublicIcon />
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="">
          <PublicIcon />
        </S.ActiveLink>
      ),
      key: "global_statistic"
    },
    {
      component: (
        <S.Link to="live_by_country">
          <GroupIcon />
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="live_by_country">
          <GroupIcon />
        </S.ActiveLink>
      ),
      key: "live_by_country"
    },
    {
      component: (
        <S.Link to="about">
          <ImportContactsIcon />
        </S.Link>
      ),
      activeComponent: (
        <S.ActiveLink to="about">
          <ImportContactsIcon />
        </S.ActiveLink>
      ),
      key: "about"
    }
  ];

  return (
    <S.Wrapper>
      <S.Menu>
        {links.map((item) => (
          <S.MenuItem key={item.key}>
            {location.pathname.split("/")[1] === item.component.props.to
              ? item.activeComponent
              : item.component}
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Wrapper>
  );
};

export default SideBar;
