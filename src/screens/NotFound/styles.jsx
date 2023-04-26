import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { device } from "utils/mediaQueries";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  height: 80vh;
`;

export const Info = styled.div`
  background-color: transparent;
  border-radius: 20px;
  padding: 22px 30px;
`;

export const Error = styled.h3`
  font-size: 200px;
  line-height: 150px;
  text-align: center;
  margin-bottom: 20px;
  color: #16191c;
  @media screen and ${device.laptopL} {
    font-size: 180px;
    line-height: 130px;
  }
  @media screen and ${device.tablet} {
    font-size: 160px;
    line-height: 110px;
  }
  @media screen and ${device.tabletS} {
    font-size: 130px;
    line-height: 80px;
  }
  @media screen and ${device.mobileL} {
    font-size: 100px;
    line-height: 70px;
  }
`;

export const Message = styled.p`
  font-size: 60px;
  line-height: 56px;
  margin-bottom: 20px;
  text-align: center;
  color: #16191c;
  @media screen and ${device.laptopL} {
    font-size: 50px;
    line-height: 46px;
  }
  @media screen and ${device.tablet} {
    font-size: 40px;
    line-height: 36px;
    margin-bottom: 10px;
  }
  @media screen and ${device.tabletS} {
    font-size: 30px;
    line-height: 26px;
  }
  @media screen and ${device.tabletS} {
    font-size: 26px;
    line-height: 22px;
  }
`;

export const Btn = styled(NavLink)`
  display: block;
  width: max-content;
  margin: 0 auto;
  background-color: #16191c;
  padding: 15px 20px;
  border-radius: 20px;
  transition: 0.2s;
  color: #ffffff;
  :hover {
    opacity: 0.8;
  }
  @media screen and ${device.tablet} {
    font-size: 14px;
  }
  @media screen and ${device.mobileL} {
    padding: 12px 18px;
    font-size: 12px;
  }
`;
