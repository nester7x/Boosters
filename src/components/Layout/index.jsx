import React from "react";
import PropTypes from "prop-types";

import SideBar from "./components/SideBar";

import * as S from "./styles";

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <SideBar />
      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
