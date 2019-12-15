import React, { useState, useEffect, useCallback, useRef } from "react";
import { AppContainer, Heading, MainContainer, TimeContainer } from "./styles";
import Time from "./Time";
import useInterval from "./useInterval";

export default () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 25
  });

  const decrementTime = useCallback(() => {
    setTime(prev => {
      if (prev.seconds === 0) {
        return {
          seconds: 59,
          minutes: prev.minutes - 1
        };
      } else
        return {
          seconds: prev.seconds - 1,
          minutes: prev.minutes
        };
    });
  }, [time]);

  useInterval(decrementTime, 1000);

  const { minutes, seconds } = time;

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
