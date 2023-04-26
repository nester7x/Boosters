import styled from "styled-components";

import { device } from "utils/mediaQueries";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  background-color: #fff8e5;
  @media screen and ${device.tablet} {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  height: 100%;
  width: 95%;
  padding: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  @media screen and ${device.tablet} {
    width: 100%;
  }
`;
