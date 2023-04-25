import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.aside`
  width: 10%;
  height: 100%;
  background-color: #16191c;
`;

export const Menu = styled.ul`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  margin: 0 0 10px;
`;

export const Link = styled(NavLink)`
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
`;
