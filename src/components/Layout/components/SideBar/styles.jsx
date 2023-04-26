import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { device } from "utils/mediaQueries";

export const Wrapper = styled.aside`
  width: 5%;
  background-color: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin: 25px 0 25px 25px;
  @media screen and ${device.desktop} {
    margin: 15px 0 15px 15px;
  }
  @media screen and ${device.tablet} {
    width: fit-content;
    margin: 25px 25px 0 25px;
  }
`;

export const Menu = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and ${device.tablet} {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  margin: 0 0 10px;
  @media screen and ${device.tablet} {
    margin: 0 10px 0 0;
  }
`;

export const Link = styled(NavLink)`
  color: #919090;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;

export const ActiveLink = styled(NavLink)`
  color: #353232;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
