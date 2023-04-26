import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { device } from "utils/mediaQueries";

export const Wrapper = styled.div`
  min-height: 55vh;
  display: flex;
  width: 60%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 50px;
  border-radius: 12px;
  background-color: #ecfff2;
  @media screen and ${device.tablet} {
    width: 100%;
    min-height: 65vh;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin: 0 0 15px;
  color: #000000;
  @media screen and ${device.tablet} {
    font-size: 22px;
  }
`;

export const InfoText = styled.p`
  font-size: 18px;
  margin: 0 0 15px;
  color: #5f5c5c;
  @media screen and ${device.tablet} {
    font-size: 15px;
  }
`;

export const Link = styled(NavLink)`
  color: #5f5c5c;
  transition: 0.3s;
  &:hover {
    color: #16191c;
  }
`;
