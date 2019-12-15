import styled from "styled-components";
import * as colors from "./colors";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${colors.bg};
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  font-size: 3rem;
  font-family: "Lilita One", cursive;
  color: ${colors.textColor};
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeContainer = styled.div`
  display: flex;
`;

const circleSize = 300;

export const Time = styled.div`
  width: ${circleSize}px;
  height: ${circleSize}px;
  border-radius: ${circleSize / 2}px;
  margin: 50px;
  border: 5px solid ${colors.timer};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-family: "Lilita One", cursive;
  color: ${colors.textColor};
`;
