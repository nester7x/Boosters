import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 0 0 15px;
`;

export const InfoText = styled.p`
  font-size: 18px;
  margin: 0 0 15px;
`;

export const Link = styled(NavLink)`
  color: #ffffff;
  transition: 0.3s;
  &:hover {
    color: #16191c;
  }
`;
