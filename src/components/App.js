import React, { useState } from "react";
import { AppContainer, Heading, MainContainer, TimeContainer } from "./styles";
import Time from "./Time";

export default () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  return (
    <AppContainer>
      <Heading>Pomodoro Timer</Heading>
      <MainContainer>
        <TimeContainer>
          <Time value={minutes} />
          <Time value={seconds} />
        </TimeContainer>
      </MainContainer>
    </AppContainer>
  );
};
